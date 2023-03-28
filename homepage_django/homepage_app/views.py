from django.shortcuts import render
from django.http import HttpResponse
from .models import Member
from .models import Team
from .models import TFT, TFTImage
from .serializers import TFTSerializer, TFTImageSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
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

@api_view(['GET'])
def get_tft(request):
    tfts = TFT.objects.all()
    tft_serializer = TFTSerializer(tfts, many=True)

    tftimages = TFTImage.objects.all()
    tftimage_serializer = TFTImageSerializer(tftimages, many=True)

    response_data = {
        'tft': tft_serializer.data,
        'tftimage': tftimage_serializer.data,
    }

    return Response(response_data)
# def get_tft(request):
    # tft = TFT.objects.all()
    # serializer = TFTSerializer(tft, many=True)
    # # 이미지 수만큼 serializer를 생성합니다.
    # for data in serializer.data:
    #     tft_obj = TFT.objects.get(pk=data['tft_key'])
    #     images = tft_obj.tft_images.all()
    #     images_serializer = TFTImageSerializer(images, many=True)
    #     data['tft_images'] = images_serializer.data

    # return HttpResponse(json.dumps(serializer.data), content_type='application/json')
# def get_tft(request):
#     tft = TFT.objects.all().values()
#     response_data = {'tft': list(tft)}
#     return HttpResponse(json.dumps(response_data), content_type='application/json')
