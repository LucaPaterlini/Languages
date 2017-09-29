# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase
from appsearch.models import Author

# Create your tests here.
def preload():
    Author(name='terry johnes',age=33).save()
    Author(name='Hèléne Joy',age=22).save()
    Author(name='Helen Mirren',age=64).save()
    Author(name='Helena Bonham Carter',age=44).save()

class DemoTest(TestCase):

    def test_search(self):
        preload()
        self.assertEqual('terry johnes',Author.objects.filter(name__icontains='Terry')[0].name)
        print Author.objects.filter(name__unaccent__icontains='Helen')