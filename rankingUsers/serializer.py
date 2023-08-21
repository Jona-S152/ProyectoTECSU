from rest_framework import serializers
from .models import SumaCalificacionesUsuario

class rankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SumaCalificacionesUsuario
        fields = '__all__'