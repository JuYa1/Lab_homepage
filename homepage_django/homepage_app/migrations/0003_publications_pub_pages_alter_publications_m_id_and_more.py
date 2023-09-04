# Generated by Django 4.1.7 on 2023-08-18 02:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('homepage_app', '0002_member_g_scholar_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='publications',
            name='pub_pages',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='publications',
            name='m_id',
            field=models.ForeignKey(db_column='m_id', on_delete=django.db.models.deletion.CASCADE, related_name='publications', to='homepage_app.member'),
        ),
        migrations.AlterField(
            model_name='publications',
            name='pub_year',
            field=models.IntegerField(),
        ),
    ]