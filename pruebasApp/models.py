from django.db import models
from logIn.models import Users  # Importa tu modelo de usuario personalizado

class Calificacion(models.Model):
    usuario = models.ForeignKey(Users, on_delete=models.CASCADE)
    prueba_numero = models.IntegerField()
    calificacion = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)

    def __str__(self):
        return f'Usuario: {self.usuario}, Prueba: {self.prueba_numero}, Calificación: {self.calificacion}'
