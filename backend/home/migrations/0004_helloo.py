# Generated by Django 2.2.28 on 2023-07-21 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_auto_20230721_1431'),
    ]

    operations = [
        migrations.CreateModel(
            name='Helloo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dsdsds', models.BigIntegerField()),
            ],
        ),
    ]