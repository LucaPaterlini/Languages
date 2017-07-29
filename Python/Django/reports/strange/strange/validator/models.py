from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _

def validate_even(value):
    if value % 2 != 0:
        raise ValidationError(
            _('%(value)s is not an even number'),
            params={'value': value},
        )

from django.db import models

class MyModel(models.Model):
    even_field = models.IntegerField(validators=[validate_even])
    def save(self, *args, **kwargs):
        self.full_clean()
        self.Loan = int(self.loan * 100)
        super(Loan, self).save(*args, **kwargs)
