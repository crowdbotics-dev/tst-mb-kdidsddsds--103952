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
class Customer(models.Model):
    'Generated Model'
    appointment_date = models.DateField()
    appointment_time = models.TimeField()
    service = models.CharField(max_length=100,)
    stylist = models.CharField(max_length=100,)
class Salon(models.Model):
    'Generated Model'
    name = models.CharField(max_length=100,)
    address = models.CharField(max_length=200,)
    phone_number = models.CharField(max_length=20,)
    email = models.EmailField(max_length=254,)
