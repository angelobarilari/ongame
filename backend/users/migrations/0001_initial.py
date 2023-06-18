# Generated by Django 4.2.2 on 2023-06-18 21:06

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                ("user_id", models.AutoField(primary_key=True, serialize=False)),
                ("is_staff", models.BooleanField(default=False)),
                ("username", models.EmailField(max_length=255, unique=True)),
                ("password", models.TextField()),
                ("name", models.CharField(max_length=100)),
                ("surname", models.CharField(max_length=100)),
                (
                    "gender",
                    models.CharField(
                        choices=[
                            ("Male", "Male"),
                            ("Female", "Female"),
                            ("Prefer not say", "Prefer Not Say"),
                        ],
                        default="Prefer not say",
                        max_length=20,
                    ),
                ),
                ("birthdate", models.DateTimeField()),
                (
                    "created_at",
                    models.DateTimeField(
                        default=datetime.datetime(
                            2023, 6, 18, 21, 6, 51, 136707, tzinfo=datetime.timezone.utc
                        )
                    ),
                ),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "avatarImage",
                    models.ImageField(blank=True, null=True, upload_to="avatarImage/"),
                ),
            ],
        ),
    ]
