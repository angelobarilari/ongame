# Generated by Django 4.2.2 on 2023-06-29 20:49

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0002_alter_user_created_at"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="created_at",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2023, 6, 29, 20, 49, 47, 435752, tzinfo=datetime.timezone.utc
                )
            ),
        ),
    ]