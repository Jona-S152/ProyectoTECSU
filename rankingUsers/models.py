from django.db import models
from django.conf import settings

class SumaCalificacionesUsuario(models.Model):
    usuario = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    suma_calificaciones = models.IntegerField(default=0)

    def actualizar_suma(self):
        calificaciones = Calificacion.objects.filter(usuario=self.usuario)
        suma = calificaciones.aggregate(models.Sum('calificacion'))['calificacion__sum']  # Aquí corregimos 'puntaje' a 'calificacion'
        self.suma_calificaciones = suma or 0
        self.save()
