# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, transaction

@transaction.atomic
def viewfunc(request):
    a.save()
    sid = transaction.savepoint()
    b.save()
    if want_to_keep_b:
        transaction.savepoint_commit(sid)
    else:
        transaction.savepoint_rollback()