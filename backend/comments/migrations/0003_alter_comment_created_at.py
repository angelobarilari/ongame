# Generated by Django 4.2.2 on 2023-06-17 20:35

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("comments", "0002_alter_comment_created_at"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comment",
            name="created_at",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2023,
                    6,
                    17,
                    20,
                    35,
                    6,
                    265945,
                    tzinfo=datetime.timezone.utc,
                )
            ),
        ),
    ]
