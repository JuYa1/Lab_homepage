from rest_framework import serializers
from .models import TFT, TFTImage

class TFTSerializer(serializers.ModelSerializer):
    class Meta:
        model = TFT
        fields = '__all__'

class TFTImageSerializer(serializers.ModelSerializer):
    tft_name = serializers.CharField(source='TFT_ForeignKey.tft_name', read_only=True)

    class Meta:
        model = TFTImage
        fields = ('id', 'TFT_ForeignKey', 'tft_image', 'tft_name')
