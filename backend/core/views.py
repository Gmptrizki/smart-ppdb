from django.shortcuts import render

def dashboard_page(request):
    return render(request, 'dashboard.html')

def get_siswa_list(request):
    data = [
        {'nama': 'Budi Santoso', 'sekolah': 'SMP N 1 Wonosari'},
        {'nama': 'Ani Lestari', 'sekolah': 'SMP N 2 Wonosari'},
    ]
    return render(request, 'partials/siswa_list.html', {'siswa_list': data})