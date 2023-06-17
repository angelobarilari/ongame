from django.db import connection
from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from django.utils.timezone import now


class Command(BaseCommand):
    help = "Create an initial administrator"

    def handle(self, *args, **options):
        with connection.cursor() as cursor:
            cursor.execute(
                "SELECT COUNT(*) FROM users_user WHERE is_staff = true"
            )
            count = cursor.fetchone()[0]

            if count == 0:
                username = "admin@admin.com"
                password = make_password("admin")
                name = "Admin"
                surname = "Admin"
                gender = "Male"
                birthdate = now().date()
                created_at = now()
                updated_at = now()

                cursor.execute(
                    """
                    INSERT INTO users_user 
                        (
                            username, 
                            password, 
                            name, 
                            surname, 
                            gender, 
                            birthdate, 
                            created_at, 
                            updated_at, 
                            is_staff
                        ) 
                    VALUES 
                        (%s, %s, %s, %s, %s, %s, %s, %s, true)
                    """,
                    [
                        username,
                        password,
                        name,
                        surname,
                        gender,
                        birthdate,
                        created_at,
                        updated_at,
                    ],
                )

                self.stdout.write(
                    self.style.SUCCESS("Admin user successfully created.")
                )
            else:
                self.stdout.write(
                    self.style.NOTICE("An admin user already exists.")
                )
