from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import make_password, check_password
from django.db.models.signals import pre_save
from django.dispatch import receiver


# Create your models here.
'''class Users(models.Model):
    userName = models.CharField(max_length=20)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.userName'''

class CustomUserManager(BaseUserManager):
    def create_user(self, userName, password=None, **extra_fields):
        if not userName:
            raise ValueError('The UserName field must be set')
        user = self.model(userName=userName, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, userName, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(userName, password, **extra_fields)

class Users(AbstractBaseUser, PermissionsMixin):
    userName = models.CharField(max_length=20, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    last_login = models.DateTimeField(default = timezone.now)
    #password = models.CharField(max_length=128)  # Campo para almacenar el hash

    objects = CustomUserManager()

    USERNAME_FIELD = 'userName'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.userName

    def set_password(self, raw_password):
        # Aplica hashing y salting usando make_password
        self.password = make_password(raw_password)
        self._password = raw_password  # Guarda el valor original para validación

    def check_password(self, raw_password):
        # Verifica la contraseña usando check_password
        return check_password(raw_password, self.password)



@receiver(pre_save, sender=Users)
def apply_password_hashing(sender, instance, **kwargs):
    # Aplica hashing y salting a la contraseña antes de guardar
    instance.password = make_password(instance.password)