from rest_framework_simplejwt.authentication import JWTAuthentication

from users.models import User


class AdminJWTAuthentication(JWTAuthentication):
    def get_user(self, validated_token):
        user_id = validated_token.get("user_id")

        if user_id:
            try:
                user = User.objects.get(user_id=user_id)

                if user.is_admin:
                    return user
            except User.DoesNotExist:
                pass

        return None
