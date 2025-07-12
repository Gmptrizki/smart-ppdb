from django.urls import path
from .views import dashboard_page, get_siswa_list

urlpatterns = [
    path('', dashboard_page, name='dashboard'),
    path('api/get-siswa/', get_siswa_list, name='get_siswa'),
]