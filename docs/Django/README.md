# 序言
django框架 202208

第二版

```python
from rest_framework.views import APIView
from rest_framework import serializers
from rest_framework.response import Response
from api.models import User

# 创建序列化器
class UserSerializer(serializers.Serializer):
    # 需要做的序列化
    username = serializers.CharField(source='UserName')
    pwd = serializers.CharField(source='Password')
    mobile = serializers.CharField(source='Mobile')
    email = serializers.EmailField(source='Email')
    age = serializers.IntegerField(source='Age')
    RegisterDate = serializers.DateTimeField(read_only=True)
    # data = serializers.DateTimeField()
    LoginDate = serializers.DateTimeField(read_only=True)

class UserView(APIView):
    # 请求所有数据
    def get(self, request):
        userall = User.objects.all()
        # 序列化instance
        # 反序列化是data
        # many  True多条False单条
        serializer = UserSerializer(instance=userall, many=True)  
        # 返回数据
        return Response(serializer.data)
    # 添加数据
    def post(self, request):
        # 反序列化data 
        # request.data,前端发送的数据
        print(request.data)
        serializer = UserSerializer(data=request.data)
        # 其他方式
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data)
        # else:
        #     return Response(serializer.errors)
        try:
            serializer.is_valid(raise_exception=True)
            # serializer.validated_data  效验成功的数据
            # 插入
            stu = User.objects.create(**serializer.validated_data)
            ser = UserSerializer(instance=stu, many=False)
            return Response(ser.data)
        except:
            return Response(serializer.errors)
class UserDetailView(APIView):
    # 查询单个
    def get(self,reqeust,pk):
        student = User.objects.get(pk=pk)
        serializer = UserSerializer(instance=student, many=False)
        return Response(serializer.data)
    # 删除数据
    def delete(self,request,pk):
        User.objects.get(pk=pk).delete()
        return Response('删除成功')
    # 修改数据
    def put(self,request,pk):
        print(request.data)
        serializer = UserSerializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            # 插入
            User.objects.filter(pk=pk).update(**serializer.validated_data)
            stu = User.objects.get(pk=pk)
            ser = UserSerializer(instance=stu, many=False)
            return Response(ser.data)
        except:
            return Response(serializer.errors)
```

第三版

```python
from dataclasses import fields
from pyexpat import model
from rest_framework.views import APIView
from rest_framework import serializers
from rest_framework.response import Response
from api.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields  exclude   二选一
        # fields = "__all__"    # 所有字段
        # fields = ["name",'paw']   # 单独字段
        exclude = ('data',) # 排除字段

class UserView(APIView):
    # 请求所有数据
    def get(self, request):
        userall = User.objects.all()
        serializer = UserSerializer(instance=userall, many=True)    # 序列化instance
        return Response(serializer.data)
    # 添加数据
    def post(self, request):
        data = UserSerializer(data=request.data)
        if data.is_valid():
            data.save()   # 条件符合，插入数据
            return Response(data.data)
        else:
            return Response(data.errors)
class UserDetailView(APIView):
    # 查询单个
    def get(self,reqeust,pk):
        student = User.objects.get(pk=pk)
        ps = UserSerializer(instance=student, many=False)
        return Response(ps.data)
    # 删除数据
    def delete(self,request,pk):
        User.objects.get(pk=pk).delete()
        return Response('删除成功')
    # 修改数据
    def put(self,request,pk):
        serializer = UserSerializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            # 插入
            User.objects.filter(pk=pk).update(**serializer.validated_data)
            stu = User.objects.get(pk=pk)
            ser = UserSerializer(instance=stu, many=False)
            return Response(ser.data)
        except:
            return Response(serializer.errors)
```

第四版

```python
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin,CreateModelMixin,RetrieveModelMixin,UpdateModelMixin,DestroyModelMixin
from rest_framework import serializers
from api.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields  exclude   二选一
        # fields = "__all__"    # 所有字段
        # fields = ["name",'paw']   # 单独字段
        exclude = ('data',) # 排除字段

class UserView(GenericAPIView,ListModelMixin,CreateModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # 请求所有数据
    def get(self, request):
        return self.list(request)
    # 添加数据
    def post(self, request):
        return self.create(request)
class UserDetailView(GenericAPIView,RetrieveModelMixin,UpdateModelMixin,DestroyModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # 查询单个
    def get(self,reqeust,pk):
        return self.retrieve(reqeust)
    # 删除数据
    def delete(self,request,pk):
        return self.destroy(request)
    # 修改数据
    def put(self,request,pk):
        return self.update(request)
```

第五版

```python
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
from rest_framework import serializers
from api.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields  exclude   二选一
        # fields = "__all__"    # 所有字段
        # fields = ["name",'paw']   # 单独字段
        exclude = ('data',) # 排除字段

class UserView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class UserDetailView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
```

