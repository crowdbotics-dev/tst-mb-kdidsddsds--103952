# Generated by Django 2.2.28 on 2023-07-21 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_helloo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='helloo',
            name='dsdsds',
        ),
        migrations.AddField(
            model_name='helloo',
            name='dsdsdsjh',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
