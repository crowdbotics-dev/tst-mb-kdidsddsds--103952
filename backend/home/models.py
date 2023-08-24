from django.conf import settings
from django.db import models
class Hello(models.Model):
    'Generated Model'
    sdsdsdsdssd = models.BigIntegerField(null=True,blank=True,)
class Helloo(models.Model):
    'Generated Model'
    dsdsdsjhhjjh = models.BigIntegerField(null=True,blank=True,)
class Pet(models.Model):
    'Generated Model'
    name = models.CharField(max_length=100,)
    species = models.CharField(max_length=100,)
    breed = models.CharField(max_length=100,)
    age = models.PositiveIntegerField()
