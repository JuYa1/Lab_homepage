# Generated by Django 4.1.7 on 2023-08-18 05:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('homepage_app', '0004_alter_publications_pub_key'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='publications',
            name='pub_pages',
        ),
    ]