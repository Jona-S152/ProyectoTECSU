from django.db import models
from logIn.models import Users  # Importa tu modelo de usuario personalizado

class TotalCalificaciones(models.Model):
    usuario = models.OneToOneField(Users, on_delete=models.CASCADE)
    total = models.DecimalField(max_digits=8, decimal_places=2, default=0.00)

    def __str__(self):
        return f'Usuario: {self.usuario}, Total: {self.total}'
