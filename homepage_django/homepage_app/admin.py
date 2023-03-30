from django.contrib import admin
from homepage_app.models import Member,Publications,Team,TFT,News,TFTImage

class PhotoInline(admin.TabularInline):
    model = TFTImage

# Post 클래스는 해당하는 Photo 객체를 리스트로 관리하는 한다. 
class PostTFT(admin.ModelAdmin):
    inlines = [PhotoInline, ]

admin.site.register(Member)
admin.site.register(Publications)
admin.site.register(Team)
admin.site.register(TFT,PostTFT)
admin.site.register(News)
# Register your models here.
