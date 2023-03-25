from django.shortcuts import render
from django.http import HttpResponse
from .models import Member
from .models import Team
from .models import TFT
import json


def main(request):
    message = request.GET.get('abc')
    print(message)

    return HttpResponse(message)

def get_member(request):
    members = Member.objects.all().values()
    response_data = {'members': list(members)}
    return HttpResponse(json.dumps(response_data), content_type='application/json')

def get_team(request):
    team = Team.objects.all().values()
    response_data = {'team': list(team)}
    return HttpResponse(json.dumps(response_data), content_type='application/json')

def get_tft(request):
    tft = TFT.objects.all().values()
    response_data = {'tft': list(tft)}
    return HttpResponse(json.dumps(response_data), content_type='application/json')
