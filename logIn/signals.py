from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User

@receiver(pre_save, sender=User)
def apply_password_techniques(sender, instance, **kwargs):
    if instance.password:
        instance.password = make_password(instance.password)

