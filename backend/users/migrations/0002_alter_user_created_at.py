# Generated by Django 4.2.2 on 2023-06-20 16:17

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="created_at",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2023,
                    6,
                    20,
                    16,
                    17,
                    10,
                    584523,
                    tzinfo=datetime.timezone.utc,
                )
            ),
        ),
    ]
