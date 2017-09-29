from django.db import models
from django.utils.translation import ugettext_lazy as _

class PollManager(models.Manager):
    def with_counts(self):
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("""
            SELECT p.id, p.question, p.poll_date, COUNT(*)
            FROM poll_opinionpoll p, polls_response r
            WHERE p.id=r.pool_id
            GROUP BY p.id, p.question, p.poll_date
            ORDER BY p.pool_date DES
            """)
            result_list = []
            for row in cursor.fetchall():
                p = self.model(id=row[0], question=row[1], poll_date=row[2])
                p.num_responses = row[3]
                result_list.append(p)
        return result_list


class OptionPoll(models.Model):
    question = models.CharField(max_length=200)
    poll_date = models.DateField()
    objects = PollManager()


class Response(models.Model):
    poll = models.ForeignKey(OptionPoll, on_delete=models.CASCADE)
    person_name = models.CharField(max_length=50)
    response = models.TextField()


class DahlBookManager(models.Model):
    def get_query(self):
        return super(DahlBookManager, self).get_queryset().filter(author='Roald Dahl')



class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=50)

    object = models.Manager()
    dahl_object = DahlBookManager()



class AuthorManager(models.Manager):
    def get_query(self):
        return super(AuthorManager,self).get_queryset().filter(role='A')


class EditorManager(models.Manager):
    def get_query(self):
        return super(EditorManager,self).get_queryset().filter(role='E')


# class Person(models.Model):
#     first_name = models.CharField(max_length=50)
#     second_name = models.CharField(max_length=50)
#     role = models.CharField(max_length=1, choices=(('A', _('Author')), ('E', _('Editor'))))
#     people = models.Manager()
#     authors = AuthorManager()
#     editor = EditorManager()

#### Base Manager

class PersonQuerySet(models.QuerySet):
    def authors(self):
        return self.filter(role='A')
    def editors(self):
        return self.filter(role)


class PersonManager(models.Manager):
    def get_queryset(self):
        return PersonQuerySet(self.model, using=self._db)
    def authors(self):
        return self.get_queryset().authors()
    def editors(self):
        return self.get_queryset().editors()

class Person(models.Model):
    first_name = models.CharField(max_length=50)
    second_name = models.CharField(max_length=50)
    role = models.CharField(max_length=1, choices=(('A', _('Author')), ('E', _('Editor'))))
    people = PersonManager()

# Errore importa _ lazy loading



## Custom QuerySet

class CustomQuerySet(models.QuerySet):
    def public_method(self):
        return

    def _private_method(self):
        return

    def opted_out_public_method(self):
        return
    opted_out_public_method.queryset_only = True

    def _opted_in_private_method(self):
        return
    _opted_in_private_method.queryset_only = False


class BaseManager(models.Manager):
     def manager_only_method(self):
         return

class CustomQuerySet(models.QuerySet):
    def manager_and_queryset_method(self):
        return

CustomManager = BaseManager.from_queryset(models.QuerySet)

class MyModel(models.Model):
    objects = CustomManager()

## ricordati che devi
