from django.db import models


class Blog(models.Model):
    name = models.CharField(max_length=100)
    tagline = models.TextField()

    def __unicode__(self):
        return self.name


class Author(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()

    def __unicode__(self):
        return self.name

class Entry(models.Model):
    blog = models.ForeignKey(Blog)
    headline = models.CharField(max_length=255)
    body_text = models.TextField()
    pub_date = models.DateField()
    mod_date = models.DateTimeField()
    authors = models.ManyToManyField(Author)
    n_comments =  models.IntegerField()
    n_pingbacks = models.IntegerField()
    rating = models.IntegerField()
    #adding managers
    objects = models.Manager()
    #entries = models.Manager()


    def __unicode__(self):
        return self.headline
#extention of a class

class ThemeBlog(Blog):
    theme = models.CharField(max_length=200)

class EntryDetails(models.Model):
    entry = models.OneToOneField(Entry, on_delete=models.CASCADE)
    details = models.TextField()
