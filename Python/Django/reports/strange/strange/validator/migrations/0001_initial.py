# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-26 16:15
from __future__ import unicode_literals

from django.db import migrations, models
import validator.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('even_field', models.IntegerField(validators=[validator.models.validate_even])),
            ],
        ),
    ]
