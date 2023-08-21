from rest_framework import viewsets
from .serializer import rankingSerializer
from .models import SumaCalificacionesUsuario

# Create your views here.
class rankingView(viewsets.ModelViewSet):
    serializer_class = rankingSerializer
    queryset = SumaCalificacionesUsuario.objects.all()