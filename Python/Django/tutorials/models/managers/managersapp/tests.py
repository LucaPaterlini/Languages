# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase
from managersapp.models import Book


# Create your tests here.
def preload():
    b = Book(title="Un sacchetto di biglie",author="Edoardo Paterlini")
    b.save()


class ManagersTest(TestCase):
    def test_book(self):
        preload()
        l = Book.object.all()
        self.assertEqual(1,len(l))
        b = Book.object.get()
        self.assertEqual(b.author,"Edoardo Paterlini")


