# Generated by Django 4.2.2 on 2023-06-18 21:06

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("users", "0001_initial"),
        ("topics", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Comment",
            fields=[
                (
                    "comment_id",
                    models.AutoField(primary_key=True, serialize=False),
                ),
                ("content", models.TextField()),
                (
                    "created_at",
                    models.DateTimeField(
                        default=datetime.datetime(
                            2023,
                            6,
                            18,
                            21,
                            6,
                            51,
                            193731,
                            tzinfo=datetime.timezone.utc,
                        )
                    ),
                ),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "author",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="comments",
                        to="users.user",
                    ),
                ),
                (
                    "topic",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="comments",
                        to="topics.topic",
                    ),
                ),
            ],
        ),
    ]
