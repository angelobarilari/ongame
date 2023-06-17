from rest_framework_simplejwt.authentication import JWTAuthentication

from users.models import User


class CustomJWTAuthentication(JWTAuthentication):
    def get_user(self, validated_token):
        user_id = validated_token["user_id"]

        if user_id:
            return User.objects.get(user_id=user_id)

        return None
