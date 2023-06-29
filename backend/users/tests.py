from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient

from django.utils import timezone
from django.contrib.auth.hashers import make_password

from .models import User
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken

import datetime
import json


class UserViewsTestCase(TestCase):
    @classmethod
    def setUpTestData(cls) -> None:
        cls.users_base_url = "http://localhost:8000/api/users/"
        cls.client = APIClient()

    def test_create_user(self):
        data = {
            "username": "testuser@example.com",
            "password": "password123",
            "name": "John",
            "surname": "Doe",
            "gender": "Male",
            "birthdate": timezone.make_aware(datetime.datetime(1990, 1, 1)),
        }

        response = self.client.post(
            f"{self.users_base_url}register/user/", data=data
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)

        user = User.objects.first()

        self.assertEqual(user.username, "testuser@example.com")
        self.assertEqual(user.is_staff, False)

    def test_create_admin(self):
        admin_user = User.objects.create(
            username="admin@admin.com",
            password=make_password("admin"),
            name="Admin",
            surname="Admin",
            gender="Male",
            birthdate=timezone.now().date(),
            is_staff=True,
        )

        token = AccessToken.for_user(admin_user)

        headers = {
            "Authorization": f"Bearer {token}",
        }

        data = {
            "username": "admin2@example.com",
            "password": "password123",
            "name": "Admin 2",
            "surname": "User",
            "gender": "Female",
            "birthdate": timezone.make_aware(datetime.datetime(1990, 1, 1)),
        }

        # Criar um novo administrador
        response = self.client.post(
            f"{self.users_base_url}register/admin/", data=data, headers=headers
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 2)

        user = User.objects.get(username="admin2@example.com")

        self.assertEqual(user.is_staff, True)

    def test_list_users(self):
        User.objects.create(
            username="user1@example.com",
            password="password123",
            name="User 1",
            surname="Doe",
            gender="Male",
            birthdate=timezone.make_aware(datetime.datetime(1990, 1, 1)),
        )

        User.objects.create(
            username="user2@example.com",
            password="password123",
            name="User 2",
            surname="Smith",
            gender="Female",
            birthdate=timezone.make_aware(datetime.datetime(1990, 1, 1)),
        )

        response = self.client.get(self.users_base_url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_retrieve_user(self):
        user = User.objects.create(
            username="testuser@example.com",
            password="password123",
            name="John",
            surname="Doe",
            gender="Male",
            birthdate=timezone.make_aware(datetime.datetime(1990, 1, 1)),
        )

        response = self.client.get(f"{self.users_base_url}{user.user_id}/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["username"], "testuser@example.com")

    def test_update_user(self):
        user = User.objects.create(
            username="testuser@example.com",
            password="password123",
            name="John",
            surname="Doe",
            gender="Male",
            birthdate=timezone.make_aware(datetime.datetime(1990, 1, 1)),
        )

        token = AccessToken.for_user(user)

        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        }

        data = {"name": "Updated Name", "surname": "Updated Surname"}

        response = self.client.patch(
            f"{self.users_base_url}{user.user_id}/",
            data=json.dumps(data),
            headers=headers,
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)

        user.refresh_from_db()

        self.assertEqual(user.name, "Updated Name")
        self.assertEqual(user.surname, "Updated Surname")

    def test_delete_user(self):
        user = User.objects.create(
            username="testuser@example.com",
            password="password123",
            name="John",
            surname="Doe",
            gender="Male",
            birthdate=timezone.make_aware(datetime.datetime(1990, 1, 1)),
        )

        token = AccessToken.for_user(user)

        headers = {"Authorization": f"Bearer {token}"}

        response = self.client.delete(
            f"{self.users_base_url}{user.user_id}/", headers=headers
        )

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(User.objects.count(), 0)

    def test_login(self):
        User.objects.create(
            username="testuser@example.com",
            password=make_password("password123"),
            name="John",
            surname="Doe",
            gender="Male",
            birthdate=timezone.make_aware(datetime.datetime(1990, 1, 1)),
        )

        data = {
            "username": "testuser@example.com",
            "password": "password123",
        }

        response = self.client.post(
            "http://localhost:8000/api/login/",
            data=data,
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("token", response.data)
