from django.db import models

class Member(models.Model):
    mem_key = models.BigIntegerField(help_text="mem_ID",primary_key=True)
    position = models.CharField(max_length=12)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    profile = models.TextField()
    g_scholar_id = models.CharField(max_length=50, default='')
    mem_image = models.ImageField(upload_to='homepage_app/img/member' , blank=True, null=True)
 
    def __str__(self):
        return self.name
    
class Publications(models.Model):
    pub_key = models.AutoField(primary_key=True)
    pub_year = models.IntegerField(null=True)
    pub_name = models.CharField(max_length=256)  # 논문명
    author_name = models.CharField(max_length=32)  # 저자
    conference_name = models.CharField(max_length=32)  # 학회명
    m_id = models.ForeignKey("Member", related_name="publications", on_delete=models.CASCADE, db_column="m_id")

    def __str__(self):
        return self.pub_name

class Team(models.Model):
    team_key = models.BigIntegerField(help_text="team_ID",primary_key=True)
    team_name = models.CharField(max_length=32)
    team_explation = models.TextField()
    team_image = models.ImageField(upload_to='homepage_app/img/team', blank=True, null=True)
 
    def __str__(self):
        return self.team_name

class TFT(models.Model):
    tft_key = models.BigIntegerField(help_text="tft_ID",primary_key=True)
    tft_name = models.CharField(max_length=32)
    tft_explation = models.TextField()
    
    def __str__(self):
        return self.tft_name

class TFTImage(models.Model):
    TFT_ForeignKey = models.ForeignKey(TFT, on_delete=models.CASCADE)
    tft_image = models.ImageField(upload_to='homepage_app/img/tft')
 
    
class News(models.Model):
    news_key = models.BigIntegerField(help_text="tft_ID",primary_key=True)
    news_year = models.IntegerField(max_length=4)
    news_name = models.CharField(max_length=32)
    news = models.TextField()
    news_image = models.ImageField(upload_to='homepage_app/img/news', blank=True, null=True)
 
    def __str__(self):
        return self.news_name