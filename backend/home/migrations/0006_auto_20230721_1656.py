# Generated by Django 2.2.28 on 2023-07-21 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_auto_20230721_1548'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='helloo',
            name='dsdsdsjh',
        ),
        migrations.AddField(
            model_name='helloo',
            name='dsdsdsjhhjjh',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
