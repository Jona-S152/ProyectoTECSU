from django.urls import path
from rest_framework.documentation import include_docs_urls
from .views import obtener_ranking

urlpatterns = [
    path('api/docs/rankingApp/', include_docs_urls(title="Documentación de Ranking App", description="API de Ranking App")),
    path('obtener_ranking/', obtener_ranking, name='obtener_ranking'),
]
