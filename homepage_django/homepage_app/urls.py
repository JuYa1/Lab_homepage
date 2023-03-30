from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.main),
    path('get_member/', views.get_members, name='get_members'),
    path('get_member/<str:mem_key>/', views.get_member, name='get_member'),
    path('get_team/', views.get_team),
    path('get_tft/', views.get_tft),
    path('get_news/', views.get_news),
    path('send_csv/', views.send_csv, name='send_csv'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)