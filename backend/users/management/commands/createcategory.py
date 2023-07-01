from django.db import connection
from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from django.utils.timezone import now


class Command(BaseCommand):
    help = "Create an initial category"

    def handle(self, *args, **options):
        with connection.cursor() as cursor:
            cursor.execute("SELECT COUNT(*) FROM categories_category")

            count = cursor.fetchone()[0]

            if count == 0:
                category = "my first category"

                cursor.execute(
                    """
                        INSERT INTO categories_category 
                            (category) 
                        VALUES 
                            (%s)
                    """,
                    [
                        category,
                    ],
                )

                self.stdout.write(
                    self.style.SUCCESS("Category successfully created.")
                )
            else:
                self.stdout.write(
                    self.style.NOTICE("Atleast an category already exists.")
                )
