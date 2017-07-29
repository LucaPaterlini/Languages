# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-24 11:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weblog', '0004_auto_20170724_1105'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='mode_date',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='n_comments',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='n_pingbacks',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='pub_date',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='entry',
            name='rating',
            field=models.IntegerField(blank=True),
        ),
    ]
