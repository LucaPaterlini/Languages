# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.test import TestCase
from weblog.models import Blog,Author,Entry, ThemeBlog,EntryDetails
from django.db.models import F,Q
from datetime import date
from pytz import timezone

def preload():
    b = Blog(name="Cheddar Talk", tagline="tagline");
    b.save()
    n = date(2012,12,12)
    n1 = date(2012,12,13)
    e = Entry(blog=b, headline="headline", body_text="body_text",
              pub_date=n, mod_date=n1, n_comments=7,
              n_pingbacks=3, rating=3)
    e.save()
    b1 = Blog(name='Beatles Blog', tagline='All the latest Beatles news.')
    b1.save()
    john = Author.objects.create(name="John")
    paul = Author.objects.create(name="Paul")
    george = Author.objects.create(name="George")
    ringo = Author.objects.create(name="Ringo")
    lennon = Author.objects.create(name="Lennon")
    e.authors.add(john, paul, george, ringo, lennon)
    e.save()

# Create your tests here.

class MqTestCase(TestCase):

    def test_date_parse(self):
        from django.utils.dateparse import parse_datetime
        naive = parse_datetime("2012-02-21 10:28:45")
        import pytz
        cp = "%s" % pytz.timezone("Europe/London").localize(naive, is_dst=None)
        self.assertEquals("2012-02-21 10:28:45+00:00",cp)

    def test_creating_objects(self):
        b = Blog(name='Beatles Blog', tagline='All the latest Beatles news.')
        b.save()

    def test_update_objects(self):
        b = Blog(name='Beatles Blog', tagline='All the latest Beatles news.')
        b.save()
        b.name = "New Name"
        b.save()

    def test_foreignkey_manytomanykey(self):
        preload()
        entry = Entry.objects.get(pk=1)
        cheese_blog = Blog.objects.get(name="Cheddar Talk")
        entry.blog = cheese_blog
        entry.save()

    def test_foreignkey_update(self):
        preload()
        joe = Author.objects.create(name="Joe")
        entry = Entry.objects.get(pk=1)
        entry.authors.add(joe)

    def test_multiple_foreignkeys(self):
        preload()
        entry = Entry.objects.get(pk=1)
        john = Author.objects.create(name="John")
        paul = Author.objects.create(name="Paul")
        george = Author.objects.create(name="George")
        ringo = Author.objects.create(name="Ringo")
        entry.authors.add(john, paul, george, ringo)
        cmp = "%s" % Blog.objects
        self.assertEquals(cmp,"weblog.Blog.objects")
        self.assertEquals(str(Entry.objects.all()),"<QuerySet [<Entry: headline>]>")
        self.assertEquals(str(Entry.objects.all().filter(pub_date__year=2012)),str(Entry.objects.filter(
            pub_date__year=2012)))
        self.assertEquals(Entry.objects.order_by('headline')[0],Entry.objects.order_by('headline')[0:1].get())

    def test_field_lookups(self):
        preload()
        self.assertEquals(Entry.objects.filter(pub_date='2012-12-12').get().headline,"headline")
        self.assertEquals(str(Blog.objects.get(name__iexact="beatles blog")),"Beatles Blog")
        self.assertEquals(str(Entry.objects.get(headline__contains='headline')),"headline")

    def test_fields_model(self):
        preload()
        self.assertEquals(str(Entry.objects.filter(n_comments__gt=F('n_pingbacks')).get()),"headline")
        self.assertEquals(str(Entry.objects.filter(n_comments__gt=F('n_pingbacks')*2).get()), "headline")
        self.assertEquals(str(Entry.objects.filter(rating__lt=F('n_pingbacks') + F("n_comments")).get()),"headline")

    def test_pk_lookup_get(self):
        preload()
        self.assertTrue(Blog.objects.get(id__exact=1)==Blog.objects.get(id=1)==Blog.objects.get(pk=1))
        #do not trust the concept of the same in
        Entry.objects.filter(headline__contains='%')

    def test_no_caching_queryset(self):
        preload()
        for i in xrange(10**3):
            queryset = Entry.objects.all()
            e=[p.headline for p in queryset]
            e=[p.pub_date for p in queryset]

    def test_caching_queryset(self):
        preload()
        queryset = Entry.objects.all()
        for i in xrange(10**3):
            e=[p.headline for p in queryset]
            e=[p.pub_date for p in queryset]
        ## It could happen with single parameters as well is not trivial beouse
        ## it the query as been fully evaluated only in this case a smaller set of answers is cached

    def test_complex_lookups_with_q_objects(self):
        Q(question_startswith='What')

    def test_copying_model_instances(self):
        preload()
        blog = Blog(name='My Blog', tagline="Blogging is easy")
        blog.save()
        blog.pk = None
        blog.save()
        self.assertEquals(Blog.objects.get(pk=4).name, 'My Blog')
        # inheritance
        django_blog = ThemeBlog(name='Django', tagline='Django is easy', theme='python')
        django_blog.save()
        django_blog.id = None
        django_blog.pk = None
        django_blog.save()
        self.assertEquals(str(Blog.objects.all()),
            "<QuerySet [<Blog: Cheddar Talk>, <Blog: Beatles Blog>, <Blog: My Blog>, <Blog: My Blog>, <Blog: Django>, <Blog: Django>]>")
        #attention it doesn't copy thre realtions
        entry = Entry.objects.all()[0]
        old_authors = entry.authors.all()
        entry.pk = None
        entry.save()
        entry.authors.set(old_authors)
        en2 = Entry.objects.all()[0]
        self.assertTrue(entry.headline==en2.headline)

    def test_updating_multiple_objs(self):
        preload()
        Entry.objects.filter(pub_date__year=2007).update(headline='Everything is the same')
        b = Blog.objects.get(pk=1)
        Entry.objects.all().update(blog=b)
        self.assertEquals(1,Entry.objects.select_related().filter(blog=b).update(headline='Everithing is the same'))
        # for item in myquery_set: item.save()

    def test_one_to_many_test(self):
        preload()
        b = Blog.objects.get(id=1)
        self.assertEquals("<QuerySet [<Entry: headline>]>",str(b.entry_set.all()))
        self.assertEquals("<QuerySet []>",str(b.entry_set.filter(headline__contains='Lennon')))
        self.assertEquals(1,b.entry_set.count())

    def test_custom_reverse_manager(self):
        preload()
        b = Blog.objects.get(id=1)
        b.entry_set(manager='objects').all()

    def test_many_to_many(self):
        preload()
        e = Entry.objects.get(id=1)
        e.authors.all()
        self.assertEquals(5,e.authors.count())
        e.authors.filter(name__contains='John')

        a = Author.objects.get(id=3)
        self.assertEquals('headline',a.entry_set.all()[0].headline)

    def test_one_to_one(self):
        preload()
        e = Entry.objects.get(id=1)
        EntryDetails(entry=e, details="many details").save()
        ed = EntryDetails.objects.get(id=1)
        self.assertEquals('headline',str(ed.entry))

        e = Entry.objects.get(id=1)
        self.assertEquals(e.entrydetails.details,"many details")

    def test_search(self):
        preload()




