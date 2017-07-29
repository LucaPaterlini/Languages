from django.db import models

class Person(models.Model):
    SHIRT_SIZES = (
        ('S','Small'),
        ('M','Medium'),
        ('L', 'Large'),
    )
    first_name = models.CharField("person's first name", max_length=30)
    last_name = models.CharField(max_length=30)
    shirt_size = models.CharField(max_length=1, choices=SHIRT_SIZES)

    def __unicode__(self): return self.name


class Musician(Person):
    instrument = models.CharField(max_length=100)

class Album(models.Model):
    artist = models.ForeignKey(Musician, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    release_date = models.DateField()
    num_stars = models.IntegerField()

class Fruit(models.Model):
    name = models.CharField(max_length=100, primary_key=True)

class Group(models.Model):
    name = models.CharField(max_length=128)
    members = models.ManyToManyField(Person, through='Membership')

    def __unicode__(self): return self.first_name + self.last_name

class Membership(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    date_joined = models.DateField()
    invite_reason = models.CharField(max_length=64)

class Person1(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    birth_date = models.DateField()

    def baby_boomer_status(self):
        "returns the person's baby-boomer status."
        import datetime
        if self.birth_date < datetime.date(1945, 8,1):
            return "Pre-boomer"
        elif self.birth_date < datetime.date(1965, 1, 1):
            return "Baby boomer"
        else:
            return "Post-boomer"

    @property
    def full_name(self):
        "Returns the person's full name."
        return '%s %s' % (self.first_name, self.last_name)


class Blog(models.Model):
    name = models.CharField(max_length=100)
    tagline = models.TextField()
    def save(self, *args, **kwargs):
        # do_something()
        super(Blog, self).save(*args, **kwargs)
        # do something_else()

class CommonInfo(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()

    class Meta:
        abstract = True
        ordering=['name']

class Student(CommonInfo):
    home_group = models.CharField(max_length=5)
    db_table = 'student_info'

class Base(models.Model):
    m2m = models.ManyToManyField(
        OtherModel,
        related_name="%(app_label)s_%(class)s_related",
        related_query_name="%(app_label)s_%(class)ss",
    )

    class Meta:
        abstract = True

class ChildA(Base):
    pass

class ChildB(Base):
    pass

