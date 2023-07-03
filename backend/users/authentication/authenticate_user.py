from users.models import User

from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth.hashers import check_password


def authenticate_user(email, password):
    user = User.objects.get(username=email)

    if check_password(password, user.password):
        refresh = RefreshToken.for_user(user)

        refresh["is_staff"] = user.is_staff

        return str(refresh.access_token)

    return None
