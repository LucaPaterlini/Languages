# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from decimal import Decimal
from django.test import TestCase
from aggapp.models import *
from django.db.models import Avg, Max, FloatField, Count, Min
from datetime import date


def preload():
    p = Publisher(name="Luca",num_awards=4);p.save()
    a = Author(name='Luca',age=25); a.save()
    m = Author(name='Matteo', age=20);m.save()
    b = Book(name="name",pages=2,price=2.10,rating=6,pubdate=date(2012,12,12),publisher=p)
    b.save();b.authors.add(a);b.save()
    b = Book(name="postcard", pages=1, price=.60, rating=8, pubdate=date(2016, 12, 12), publisher=p);b.save()
    b.authors.add(m);b.save()

    st =   Store(name="Nice Book Store",registered_users=10);st.save()
    st.books.add(*Book.objects.all());st.save()


class DemoTest(TestCase):

    def test_chaat_sheet(self):
        preload()
        self.assertEquals(2,Book.objects.count())
        self.assertEquals(2,Book.objects.filter(publisher__name='Luca').count())
        self.assertEquals(1.35,Book.objects.all().aggregate(Avg('price'))['price__avg'])
        self.assertEquals(2.10, float(Book.objects.all().aggregate(Max('price'))['price__max']))
        # difference between the highest and the average price
        self.assertEquals(0.75,Book.objects.aggregate(
            price_diff=Max('price', output_field=FloatField()) - Avg('price'))['price_diff'])

        pubs = Publisher.objects.annotate(num_books=Count('book'))
        self.assertEquals('<QuerySet [<Publisher: Luca>]>', str(pubs))
        self.assertEquals(2,pubs[0].num_books)
        #top 5 publisher in order by number of books
        pubs = Publisher.objects.annotate(num_books=Count('book')).order_by('-num_books')[:5]
        self.assertEquals(2, pubs[0].num_books)


    def test_aggregates_over_a_queryset(self):
        preload()
        # multiple aggregations
        Book.objects.aggregate(Avg('price'),Max('price'),Min('price'))
        book = Book.objects.first()
        self.assertEquals(book.authors.count(),1)
        self.assertEquals(book.store_set.count(), 1)
        q =Book.objects.annotate(Count('authors',distinct=True), Count('store',distinct=True))
        self.assertEquals(q[0].authors__count,1)
        self.assertEquals(q[0].store__count, 1)
        self.assertEquals({'min_price': Decimal('0.60'), 'max_price': Decimal('2.10')},
                     Store.objects.aggregate(min_price=Min('books__price'),max_price=Max('books__price')))

        self.assertEquals(20, Store.objects.aggregate(youngest_age=Min('books__authors__age'))['youngest_age'])

    def test_filter_exclude(self):
        preload()
        Book.objects.filter(name__startswith="Django").annotate(num_authors=Count('authors'))
        Book.objects.filter(name__startswith="Django").aggregate(Avg("price"))
        Book.objects.annotate(num_authors=Count('authors')).filter(num_authors__gt=1)

    def test_values(self):
        preload()
        a,b=Author.objects.annotate(average_rating=Avg('book__rating'))
        self.assertEqual(a.average_rating,6)
        # merged case by author name instead
        Author.objects.values('name').annotate(average_rating=Avg('book__rating'))
        Author.objects.annotate(average_rating=Avg('book__rating')).values('name','average_rating')
        Item.objects.values("data").annotate(Count("id")).order_by()

    def test_aggregation_annotations(self):
        preload()
        self.assertEqual(1.0,Book.objects.annotate(num_authors=Count('authors')).aggregate(Avg(
            'num_authors'))["num_authors__avg"])