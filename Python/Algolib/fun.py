# -- separate project  --BASE FILE for comp-----------
def readint(): return int(f.readline())
def readarray(): return [int(x) for x in f.readline().split()]

def fun():


f=open('in','r');T=readint()
for i in range(1,T+1):
    print "Case #%d: %s" %(i,fun())


#------------------
# utility,uti*li
import re
f=open('in','r')
f2=open('ou','w')
def readint(): return int(f.readline())
def readarray(): return [int(x) for x in f.readline().split()]


# numero di rettangoli ottenibili in un dato piano
def getnrectangles(n,m):
	return ((n*(n+1)/2)*(m*(m+1)/2))

# angolo uscita proiettile data distanza e velocità uscita (in gradi)
def get_a_g(V,D):
    import math
    c=(9.8*D)/(1.0*V**2)
    if c<1.0 : 
        return math.asin(c)/2 *(180/math.pi)
    return 45.000000000000

# problema del grafo bicolorabile (bicolorable graph)
def bicolorable_graph(diz):
    root=diz.keys()[0];
    c={};q=[]
    for k in diz.keys(): c[k]=2
    c[root]=0; q.append(root)
    while q:
        u=q.pop()
        for e in diz[u]:
            if c[e]==2:
                c[e]=(c[u]+1)%2
                q.append(e)
            if c[e]==c[u]: return 'No'
    return 'Yes'

# bfs visita in estensione su grafi non pesati
# diz={n:[n1,n2]}
def bfs(diz):
    root=diz.keys()[0];
    c={};q=[]
    for k in diz.keys(): c[k]=1
    c[root]=0; q.append(root)
    while q:
        di=q.pop();
        u=''.join(di)
        #analisi nodo in entrata
        for e in diz[u]:
            if c[e]==1:
                c[e]=0;q.append(e)
#dfs
#dfs diz,root,diz vuoto
def dfs(graph,v,visited):
    visited[v]=1
    print v
    for k in graph[v]:
        try:visited[k]
        except: dfs(graph,k,visited)

# creazione dizionario archi non pesatdef get_graph_np(f):
def get_graph(f):
    N=int(f.readline());diz={};
    for i in range(0,N):
        a,b=f.readline().split()
        if a not in diz.keys(): diz[a]=[]
        diz[a].append(b)
        if b not in diz.keys(): diz[b]=[]
        diz[b].append(a)
    return diz

# creazione dizionario archi pesati start,finish,weight
def get_graph_p(f):
    N=int(wf.readline())diz={};
    for i in range(0,N):
        a,b,c=f.readline().split()
        if a not in diz.keys(): diz[a]={}
        diz[a][b]=c
        if b not in diz.keys(): diz[b]={}
        diz[b][a]=c
    return diz

# get matrix of costs of nears elements and put it in a dictionary
# range out [-1,n][0,m+1] 
def mattogr(M):
    n=len(M); m=len(M[0]);diz={}
    for i in range(-(m+2),(n+1)*(m+2)): diz[i]={}
    for i in range(0,n):
        for j in range(0,m):
            diz[(i-1)*(m+2)+j+1][i*(m+2)+j+1]=M[i][j] #top
            diz[i*(m+2)+j][i*(m+2)+j+1]=M[i][j]    #left
            diz[(i+1)*(m+2)+j+1][i*(m+2)+j+1]=M[i][j] #bot
            diz[i*(m+2)+j+2][i*(m+2)+j+1]=M[i][j]      #right
    return diz

# dijkstra, ritorna prev,costo per ogni nodo
def dijkstra(graph,source):
    from heapq import heappush, heappop,heapify
    from copy import copy
    n=len(graph)
    dist={}
    previus={}
    for i in graph.keys(): 
            dist[i]=float("Inf")
            previus[i]=[float("Inf"),"undefined"]
    dist[source]=0
    pq=[(0,source)]
    while len(pq)!=0 :
        u=heappop(pq)
        for v in graph[u[1]].keys():
            alt = dist[u[1]] + graph[u[1]][v]
            if alt < dist[v]:
                dist[v]=alt;previus[v]=[alt,u[1]];
                heappush(pq,[dist[v],v])
                
    return previus

#after dijkstra u could get the shortest path from the root to another point
def path(prevec,b):
    q=[];c=prevec[b][1]
    while "undefined"!=prevec[b][0]:
        b=prevec[b][0]
        q.append(b)
        c+=prevec[b][1]
    #print q
    return -1 if c==float("inf") else c

#isempty dictionary
isempty=(diz and True)or False

#distinct value
my_list = list(set(my_list))

#trova simmetria massima
#NON PRESO
def find_simmetrics_decimals(s):
    c=len(s)/2
    while c>1:
        if s[0:c]==s[c:2*c]: return s[:c]
        c-=1


#methods for big decimal.. 
from decimal import getcontext, Decimal
getcontext().prec = 102
squares = set(i*i for i in range(2,10))
 
total = 0
for z in range(2,100):
    if z in squares: continue
    q = str(int(Decimal(z).sqrt()*10**99))
    total += sum(int(c) for c in q)
 
print total

#----------------------------------------------
#Return the number of way in witch a sum could be paid
def dpath_finder(coins,target):
    ways = [1]+[0]*target
    for coin in coins:
        for i in range(coin, target+1):
            ways[i] += ways[i-coin]
    return ways[target]

#ritorna un dizionario con i triangoli in chiave per perimetro
def gen_triple_real(L):
  from math import sqrt
  diz={}
  for i in range(0,L): diz[i]=[]
  sqrt_L=int(sqrt(L))
  for i in range(1,sqrt_L+1,2):
    for j in range(2,sqrt_L+1-i,2):
      if gcd(i,j)==1:
        a=abs(j*j-i*i);b=2*i*j;c=i*i+j*j
        sum=a+b+c;k=1
        while sum*k<L: diz[sum]+=[[k*a,k*b,k*c]];k+=1
  return diz    

#generate a vector of triangle rectangle wich max hight and lenght is 2*(n-1)**2   -> gdc
#exit format c1,c2,d (Ritorna un vettore con rettangoli)
def gen_triangle_rectangle(n):
    from math import sqrt
    #import gcd
    v=[]
    for i in range(1,sqrt(n),2):
        for j in range(2,sqrt(n)-i,2):
            if gcd(i,j)==1:
                v.append([abs(j*j-i*i),2*i*j,i*i+j*j])
                k=0;
                while (k*(j*j-i*i)<n**2):
                    k+=1
                    v.append([abs(k*(j*j-i*i)),k*(2*i*j),k*(i*i+j*j)])
    v.sort()
    return v

#Returns the greater common divisor (also  known mcd in Italy)
def gcd(a,b):
    r=1
    if a<b : h=a;a=b;b=h
    while r>0: r=a%b;a=b;b=r
    return a

# function for idiots
#NON PRESO
def is_coprime(a,b):
    if mcd(a,b)==1 return 1
    return 0

#testa se a è una permutazione di b    
def is_perm(a,b):
    v=[0]*256
    for c in str(a):v[ord(c)]+=1
    for c in str(b):v[ord(c)]-=1
    for i in v: 
        if i!=0: return 0
    return 1
 
#traduce un vettore di numeri in un intero in decimale
#NON PRESO 
def vect_to_num(v):
    x=0
    for i in v: x=x*10**len(str(i))+i
    return x

#pell equation, prende solo numeri primi
#NON PRESO
def pell(d):
    p,k,x1,y,sd=1,1,1,0,math.sqrt(d)
    while k != 1 or y == 0:
        p = k * (p/k+1) - p
        p = p - int((p - sd)/k) * k
        x = (p*x1 + d*y) / abs(k)
        y = (p*y + x1) / abs(k)
        k = (p*p - d) / k
        x1 = x
    return x


#stampa la testa del numero di cui si fa le continued fraction
#NON PRESO
def continue_fractions(num):
    import math
    q=int(math.sqrt(num))
    b=num-q*q
    if b==0: return [q]
    a=(q+q)/b
    c=q-(q+q)%b
    sa=a;sb=b;sc=c
    vect=[q,a]
    while True:
        b=(num-c*c)/b
        a=(c+q)/b
        c=q-(q+c)%b;
        if sa==a and sb==b and sc==c: return vect
        vect.append(a)

#------------sieve section ---------

def Is_Triangle(x):
    import math
    q=(math.sqrt(1+8*x)-1)/2
    if q==int(q): return int(q)
    return -1

def Is_Square(x):
    import math
    q=math.sqrt(x)
    if q==int(q): return int(q)
    return -1

def Is_Pentagonal(x):
    import math
    q=(1+math.sqrt(1+24*x))/6
    if q==int(q): return int(q)
    return -1

def Is_Hexagonal(x):
    import math
    q=(1+math.sqrt(1+8*x))/4
    if q==int(q): return int(q)
    return -1

def Is_Heptagonal(x):
    import math
    q=(3+math.sqrt(9+40*x))/10
    if q==int(q): return int(q)
    return -1

def Is_Octagonal(x):
    import math
    q=(2+math.sqrt(4+12*x))/6
    if q==int(q): return int(q)
    return -1



#------------end sieve section ----------


#----cripto section -------------
#NON PRESO
def ontimepad_Encrypt(message,key):
    encryptedMessage=[]
    for i in xrange(0,len(message)):
        encryptedMessage.append(message[i]^key[i%len(key)])
    return encryptedMessage

#NON PRESO
def statistical_Analysis_with_spaces(message,keylenght):
    aMessage=[[0]*len(message)]*(max(message)+1);
    key=[0]*keylenght

    for i in xrange(0,len(message)):
        j=i%keylenght
        aMessage[j][message[i]]+=1
        if aMessage[j][message[i]]>=aMessage[j][key[j]]:
            key[j]=message[i]

    spaceAscii=32
    for i in xrange(0,keylenght):
        key[i]=key[i]^spaceAscii
    return key

#--- end cripto section

#tests if exist a digit reapeated at least k times
def test_max_repetition(i,k):
    vect=[0]*10
    while i>0:
        vect[(i%10)]+=1;i/=10
    for i in vect: 
        if i >=k: return 1
    return 0

#ricerca in log^2n del indice di un elemento interno ad un vettore ordinato
def binarysearch(vet,val,bot,top):
    if bot>top:return -1
    medium=(bot+top)/2
    if vet[medium]==val:return medium
    elif val < vet[medium]: return binarysearch(vet,val,bot,medium)
    else: return binarysearch(vet,val,medium+1,top)


#polish reverse notation conversion
#NON PRESO
#da terminare
def extract(stack,sc,sc1):
    v=[];tnpr=''
    while len(stack)>0 and stack[-1]!='(' : 
        g=stack.pop();v.append(sc[g]);
    if len(stack): stack.pop();
    print v;v.sort()
    for i in v: tnpr+=sc1[i]
    return stack,tnpr


def npconversion(st):
    sc={'+':7,'-':6,'*':5,'/':4,'^':3,'(':2,')':1};
    sc1={7:'+',6:'-',5:'*',4:'/',3:'^'};
    stack=[];npr=''
    for s in st:
        if s not in sc.keys(): npr+=s
        else:
            if s!=')': stack.append(s)
            else: 
                stack,xnpr=extract(stack,sc,sc1);npr+=xnpr         
    while len(stack)>0: 
        stack,xnpr=extract(stack,sc,sc1);npr+=xnpr
    return npr

# ritorna la somma delle posizioni dei caratteri nel alfabeto (case unsesitive)   
def wordvalue(st):
    import string; s=0
    for c in st:
        if c in string.uppercase:s+=string.uppercase.index(c)+1
        if c in string.lowercase:s+=string.lowercase.index(c)+1
    return s

# vecchia versione di test di primalità
from math import sqrt
def isprimeold(n):
    if int(sqrt(n))**2==n: return 0
    for i in range(2,int(sqrt(n))): 
        if n%i==0: return 0
    return 1

#test palidromicità
def ispalindrome(st):
    return st==st[::-1]

#generatore di palindromi da 0 a limit
def genpalindrome(limit):
    import math
    v=[]
    for q in range(0,min(limit,10)): v.append(str(q))
    for i in range(1,int(math.sqrt(limit))):
        p=str(i)+str(i)[::-1]
        if int(p)<limit:v.append(p)
        if i*10<=math.sqrt(limit):
            for q in range(0,9):
                p=str(i)+str(q)+str(i)[::-1]
                if int(p)<limit:v.append(p)
    v=[int(u) for u in v]
    v.sort()
    return v 

# testa se sono stati usati tutti i digit nel numero dato
def pandigit(i):
    vect=[0]*9
    while i>0:
        if i%10==0: return 0
        vect[(i%10)-1]+=1;i/=10
    for i in vect: 
        if i !=1: return 0
    return 1

#funzioni combinatorie su stringhe, valore campi ritorno

def combinations(string,r):
    import itertools
    return  [''.join(item) for item in itertools.combinations(string,r)]

def permutations_nor(string,r):
    import itertools
    return  [int(''.join(item)) for item in itertools.permutations(string,r)]

def permutations(string):
    import itertools
    return  [''.join(item) for item in itertools.permutations(string)]


# tests if there is two values that summed could make a passed value
def sum_is_in(vet,n,k):
    i=0;j=n-1
    while i<j:
        if  vet[i]+vet[j]==k : return True
        if vet[i]+vet[j]<k: i+=1
        if vet[i]+vet[j]>k: j-=1
    return False

#Returns vector of divisors of  the number
def Divisors(number):
    import math
    nod = []
    sqrt = math.sqrt(number)
    for i in range(1,int(sqrt)):
        if number%i == 0:
            nod.append(i)
            nod.append(number/i)
    nod.sort()
    if nod : nod.pop(-1)
    return nod

#sum of integer divisors of n
#NON PRESO
def sum_divisors(n):
    import math
    s = 1
    for i in range(1,int(math.sqrt(n))):
        if n % i == 0: 
            s += i; 
    return s*2

#return numerosity of n divisors
#NON PRESO
def N_Divisors(number):
    import math
    sqrt = math.sqrt(number);s=0
    for i in range(1,int(sqrt)):
        if number%i == 0:
            s+=2
    return s-1
#ritorna la somma dei singoli digit del numero
#NON PRESO
def sumdigit(n):
    s=0
    while n>0:
        s+=n%10;n/=10
    return s
#ritorna la lunghezza del numero
#NON PRESO
def numdigit(n):
    s=0
    while n>0:
        s+=1; n/=10
    return s

#ritorna il succesivo di b divisibile per a
#NON PRESO
def succ(a,b):
	u=b/a
	if (b%a!=0): u=u+1
	return(u*a)
	
#ritorna un vettore di numeri primi minore di limit
def AtkinSieve (limit):
    import math
    results = [2,3,5]
    sieve = [False]*(limit+1)
    factor = int(math.sqrt(limit))+1
    for i in range(1,factor):
        for j in range(1, factor):
            n = 4*i**2+j**2
            if (n <= limit) and (n % 12 == 1 or n % 12 == 5):
                sieve[n] = not sieve[n]
            n = 3*i**2+j**2
            if (n <= limit) and (n % 12 == 7):
                sieve[n] = not sieve[n]
            if i>j:
                n = 3*i**2-j**2
                if (n <= limit) and (n % 12 == 11):
                    sieve[n] = not sieve[n]
    for index in range(5,factor):
        if sieve[index]:
            for jndex in range(index**2, limit, index**2):
                sieve[jndex] = False
    for index in range(7,limit):
        if sieve[index]:
            results.append(index)
    return results


# ritorna un vettore con i fattori primi di n
# dipendenze : AtkinSieve
def primeFacs(n):
    primes = AtkinSieve((n/2)+1)
    return [x for x in primes if n%x == 0]

#prende in input un vettore ordinato ritorna posizione minima elemento
def lower_bound(vect,start,end,elem):
    m=(start+end)/2
    if vect[m]>=elem and (m==start or m==end or vect[m-1]<elem): return m
    if vect[m+1]>=elem and vect[m]>=elem : return(lower_bound(vect,start,m,elem))
    else: return(lower_bound(vect,m+1,end,elem))

#prende in input vettore ordinato ritorna posizione massima elem
def upper_bound(vect,start,end,elem):
    m=(start+end)/2
    if vect[m]==elem and (m==end or vect[m+1]>elem): return m
    if vect[m-1]<=elem and vect[m]<=elem : return(upper_bound(vect,m+1,end,elem))
    else: return(upper_bound(vect,start,m,elem))

#conversione da numero romano a decimale
def roman_to_dec(str):
    diz={'M':1000,'D':500,'C':100,'L':50,'X':10,'V':5,'I':1}
    tmp=0
    for i in xrange(0,len(str[:-1])):
        tmp+= -diz[j[i]] if diz[j[i]]<diz[j[i+1]] else diz[j[i]]
    tmp+=diz[str[-1]]   
    return tmp

#conversione da decimale a romano ottimizzato
def dec_to_roman(num):
    diz=[[1000,'M'],[500,'D'],[100,'C'],[50,'L'],[10,'X'],[5,'V'],[1,'I']]
    s='';
    for i in xrange(len(diz)):
        while num/diz[i][0]>0: 
            num-=diz[i][0];s+=diz[i][1]
        if str(diz[i][0])[0]=='1' and (num*10)/diz[i][0]==9:
            num-=diz[i][0]-diz[i+2][0];s+=diz[i+2][1]+diz[i][1]
        if str(diz[i][0])[0]=='5' and (num*10)/10**len(str(diz[i][0]))==4:
            num-=diz[i][0]-diz[i+1][0];s+=diz[i+1][1]+diz[i][1]
    return s

#best place on a 2d_grap , serve per trovare il posto che costa meno in spazio per un ritrovo
#attenzione perché si parte dai dizionari contenenti le numerosità per x e per y
# per info vedi cj/s3/2, da ripensare alla luce di ex12.py
# da riguardare il problema del grafo medesimo
def cheapest_place_2d_graph(dizx,dizy,v):
    sf=0;sr=0;tf=0;tr=0;tkv=sorted(dizx.keys());tl=len(tkv)-1
    for k in xrange(1,tl+1):
        tf=(dizx[tkv[k-1]][0]+sf)*abs(tkv[k]-tkv[k-1])+tf
        dizx[tkv[k]][1]+=tf;sf+=dizx[tkv[k-1]][0]
        tr=(dizx[tkv[tl-k+1]][0]+sr)*abs(tkv[tl-k]-tkv[tl-k+1])+tr
        dizx[tkv[tl-k]][1]+=tr;sr+=dizx[tkv[tl-k+1]][0]

    sf=0;sr=0;tf=0;tr=0;tkv=sorted(dizy.keys());tl=len(tkv)-1
    for k in xrange(1,tl+1):
        tf=(dizy[tkv[k-1]][0]+sf)*abs(tkv[k]-tkv[k-1])+tf
        dizy[tkv[k]][1]+=tf;sf+=dizy[tkv[k-1]][0]
        tr=(dizy[tkv[tl-k+1]][0]+sr)*abs(tkv[tl-k]-tkv[tl-k+1])+tr
        dizy[tkv[tl-k]][1]+=tr;sr+=dizy[tkv[tl-k+1]][0]
    vmax=10**999;oldx=10**999;oldy=10**999
    for item in v:
        x1,y1,x2,y2=item
        for x in range(x1,x2+1):
            for y in range(y1,y2+1):
                c=dizx[x][1]+dizy[y][1]
                if c<vmax or (c==vmax and oldx>x):
                    oldx=x;oldy=y;vmax=c
    return "%d %d %d"%(oldx,oldy,vmax)

# trasformare un vettore ordinato in uno [val,num]
# NON PRESO
def get_num_vect(r):
    p=1;v=[]
    for i in xrange(1,len(r)):
        if r[i]==r[i-1]: p+=1
        else: 
            v.append([r[i-1],p]); p=1
    v.append([r[-1],p])
    return v

# ricerca posto migliore lineare( sottoproblema ricerca 2 d)
def best_place_linear(v):
    v.sort();total=v[len(v)/2];distance=0
    for i in xrange(len(v)): distance+=abs(v[i]-total)
    return distance

#conversione decimale_binario
#NON PRESO già in lib
def dec_to_bin(n,cut):
    r=''
    for i in reversed(xrange(0,cut)):
        if n/(2**i):
            n=n%(2**i);r+='1'
        else: r+='0'
    return r

#max_flow_ edmonds_karp
#formato diz (enges:{edgef:[capacity,flow]}), start end
#trova il flusso massimo tra sorgente e pozzo in un grafo
# con le capacity 

def Edmonds_Karp_Bfs(C,s,t):
    n=len(C.keys())
    P=[-1]*n
    P[s]=-2;M=[0]*n;M[s]=float("Inf")
    Q=[]
    Q.append(s)
    while Q:
        u=Q.pop()
        for v in C[u].keys():
            if C[u][v][0]-C[u][v][1]>0 and P[v]==-1:
                P[v]=u
                M[v]=min(M[u],C[u][v][0]-C[u][v][1])
                if v!=t: Q.append(v)
                else: return M[t],P,C
    return 0,P,C    


def Edmonds_Karp(C,s,t):
    f=0;
    while 1:
        m,P,C=Edmonds_Karp_Bfs(C,s,t)
        if m==0 : break
        f+=m;v=t
        while v!=s:
            u=P[v]
            C[u][v][1]+=m
            try:  C[v][u][1]-=m
            except KeyError: C[v][u]=[-C[u][v][1],-m]
            v=u
    return (f,C)

#creazione di tutti i set product(S)=sum(S)
#opzionale: funzionalizza
def prodsum(p,s,c,start):
    k=p-s+c
    if k<kmax:
        if p<n[k]: n[k]=p
        for i in range(start,kmax/p*2):
            prodsum(p*i,s+i,c+1,i)

kmax=12000+1
n=[2*kmax]*kmax
prodsum(1,1,1,2)
print sum(set(n[2:]))
#------------------------------



#permtutations with repetition of ones
def transport_of_ones(n,size):
    index=range(n+1);v=[];index[n]=size
    while index[0]<(size-n):
        t=[0]*size
        for q in index[:-1]: t[q]=1
        v.append(''.join([str(x) for x in t]))
        for i in reversed(xrange(len(index)-1)):
            if index[i]!=(index[i+1]-1):
                j=i+1;index[i]+=1
                while (n-j)>0:
                    index[j]=index[i]+j-i;j+=1
                break
    v.append('0'*(size-n)+'1'*n)
    return v



# prende un diz e radice e da fuori l'albero corretto
def reverse_tree(diz,root):# 
    diz2={}; ve=[1]*40
    for i in xrange(40):diz2[i]=[]
    for i in diz.keys(): diz2[diz[i]].append(i)
    q=[root]
    while q:
        u=q.pop();ve[u]=0; print u,
        for e in diz2[u]:
            if ve[e]: q.insert(0,e)
    print 'somma: ',sum(ve)
#kruskall problem
class Disjoint_set:
    def __init__ (self):
        self.diz={}
    def Makeset(self,x): 
        self.diz[x]=x
    def find(self,x):
        if self.diz[x]==x : return x
        else: return self.find(self.diz[x])
    def Union(self,x,y):
        xRoot=self.find(x);yRoot=self.find(y);self.diz[xRoot]=yRoot



def Kruskal(Gv,Ge): # v=nodes;v=[cost,a,b]
    A=[];Ge.sort();C=Disjoint_set()
    for v in Gv: C.Makeset(v)
    for el in Ge:
        if C.find(el[1])!=C.find(el[2]):
            A.append(el);C.Union(el[1],el[2])
    return A
#--------

# todo 
#ricerca di allineamenti su matrici
# kruskal,graham
# graph max flow/min cost (edmonds-karp)(cancellazione cicli)
# visit tourning(stupid robot), cheapest place 2d grap
# struttura try /except
# funzionalizza china 14 all gj 13



#appunti per la compilazione
#python -m py_compile  ex4.py ti da il compilato
#test primalità teoram di fermat e ricerca numeri primi random





#-----------------aggiunte------
#mancadescrizione
def PrimeFactiorisationNoD(number,ex,prime):
    nod = 1
    remain = number
    for i in prime:
        if i*i>number: return nod*2
        exponent = 1
        while (remain % i == 0 ):
            exponent+=ex
            remain/=i
        nod*=exponent
        if remain==1: return nod
    return nod


#newton's binomial
def Choose(n,k):
    k=min(k,n-k);res=1
    for i in xrange(1,k+1): res*=n-k+i;
    for i in xrange(1,k+1): res/=i
    return res

#ways of dispose blocks on an array 
#stripsize,blocksize,bordersize
cache=[0]*(m+1)
def F(m,n,border):
    global cache
    solutions=1
    if n>m : return solutions
    if cache[m]!=0: return cache[m]
    for startpos in xrange(0,m-n+1):
        for blocklength in xrange(n,m-startpos+1):
            solutions+=F(m-startpos-blocklength-border,n,border)
    cache[m] = solutions;
    return solutions;

#miller rabin probabilistic test
def ProbabilisticPrimeTest(n):
    import random
    _mrtp_num_trials=5
    if n<2: return 0
    if n==2: return 1
    if n%2==0: return 0
    s=0;d=n-1
    while 1:
        quotient,remainder=divmod(d,2)
        if remainder==1: break
        s+=1;d=quotient
    assert(2**s*d==n-1)
    def try_decomposite(a):
        if pow(a,d,n)==1: return 0
        for i in range(s):
            if pow(a,2**i*d,n)==n-1: return 0
        return 1
    for i in range(_mrtp_num_trials):
        a=random.randrange(2,n)
        if try_decomposite(a): return 0
    return 1

#ritorna un vettore di tutti i vettori diversi che danno come somma s
def ways_S_generator(s):
    m=[];r=[]
    for i in xrange(s,0,-1): m.append([i])
    while m:
        u=m.pop()
        for i in xrange(u[-1],s+1):
            u.append(i)
            if sum(u)<s: m.append(u)
            if sum(u)==s:r.append(u)
            u=u[:-1]
    return r

#ritona true se v contiene una cabinazione anche con elementi ripetuti
#di elementi la cui somma è x
def sum3(x,v):
    g=[]
    for i in v:
        for j in v: g.append(i+j)
    g.sort();i=len(v)-1;j=0
    while i>0 and j<len(g):
        if x==g[j]+v[i]: return 1
        elif x<g[j]+v[i]: i-=1
        else: j+=1
    return 0

#enumerazione in base x di lunghezza n
def enum(x,n):
    v=[0]*n;r=0
    while r<1: 
        r=1;i=0;
        print v
        while r>0 and i<n: 
            v[i]+=r;r=v[i]/x;v[i]%=x;i+=1

#chinese_remainder 
#se non ti ricordi vai a vedre ex135.py

def mul_inv(a, b):
    b0 = b
    x0, x1 = 0, 1
    if b == 1: return 1
    while a > 1:
        q = a / b
        a, b = b, a%b
        x0, x1 = x1 - q * x0, x0
    if x1 < 0: x1 += b0
    return x1
 
def chinese_remainder(vn, a, lena): 
    p = i = prod = 1; sm = 0
    for i in range(lena): prod *= vn[i]
    for i in range(lena):
        p = prod / vn[i]
        sm += va[i] * mul_inv(p, vn[i]) * p
    return sm % prod
#--------------------------- 





#convex_hull_intero trova fuori il perimetro
def convex_hull(points):
    points = sorted(set(points))
    if len(points) <= 1: return points
    def cross(o, a, b):
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
    lower = []
    for p in points:
        while len(lower) >= 2 and cross(lower[-2], lower[-1], p) <= 0:
            lower.pop()
        lower.append(p)
    upper = []
    for p in reversed(points):
        while len(upper) >= 2 and cross(upper[-2], upper[-1], p) <= 0:
            upper.pop()
        upper.append(p)
    return lower[:-1] + upper[:-1]

#zero se è un anagramma, altrimenti ci sono i caratteri di differenza
#sulla prima stringa
def Is_An_Anagram(a,b):
    diz={}
    for c in a: 
        try: diz[c]+=1
        except: diz[c]=1
    for c in b:
        try: diz[c]-=1
        except: pass
    return sum([x for x in diz.values() if x>0


# Knuth-Morris-Pratt string matching
# David Eppstein, UC Irvine, 1 Mar 2002

#from http://code.activestate.com/recipes/117214/
def KnuthMorrisPratt(text, pattern):

    '''Yields all starting positions of copies of the pattern in the text.
Calling conventions are similar to string.find, but its arguments can be
lists or iterators, not just strings, it returns all matches, not just
the first one, and it does not need the whole text in memory at once.
Whenever it yields, it will have read the text exactly up to and including
the match that caused the yield.'''

    # allow indexing into pattern and protect against change during yield
    pattern = list(pattern)

    # build table of shift amounts
    shifts = [1] * (len(pattern) + 1)
    shift = 1
    for pos in range(len(pattern)):
        while shift <= pos and pattern[pos] != pattern[pos-shift]:
            shift += shifts[pos-shift]
        shifts[pos+1] = shift

    # do the actual search
    startPos = 0
    matchLen = 0
    for c in text:
        while matchLen == len(pattern) or \
              matchLen >= 0 and pattern[matchLen] != c:
            startPos += shifts[matchLen]
            matchLen -= shifts[matchLen]
        matchLen += 1
        if matchLen == len(pattern):
            yield startPos



#basic operations with points
class Points(object):
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z

    def __sub__(self, no):
        x = self.x - no.x
        y = self.y - no.y
        z = self.z - no.z
        return Points(x, y, z)

    def dot(self, no):
        x = self.x * no.x
        y = self.y * no.y
        z = self.z * no.z
        return x + y + z

    def cross(self, no):
        x = self.y * no.z - self.z * no.y
        y = self.z * no.x - self.x * no.z
        z = self.x * no.y - self.y * no.x
        return Points(x, y, z)

    def absolute_scale(self):
        return pow((self.x ** 2 + self.y ** 2 + self.z ** 2), .5)

#poker valore numerico intero di una mano
from collections import Counter
values = {r:i for i,r in enumerate('23456789TJQKA', start=2)}
straights = [(v, v-1, v-2, v-3, v-4) for v in range(14, 5, -1)] + [(14, 5, 4, 3, 2)]
ranks = [(1,1,1,1,1),(2,1,1,1),(2,2,1),(3,1,1),(),(),(3,2),(4,1)]

def hand_rank(hand):
	score = zip(*sorted(((v, values[k]) for
		k,v in Counter(x[0] for x in hand).items()), reverse=True))
	score[0] = ranks.index(score[0])
	if len(set(card[1] for card in hand)) == 1: score[0] = 5  # flush
	if score[1] in straights: score[0] = 8 if score[0] == 5 else 4  # str./str. flush

#impostato senza semi, basta rimuovere c per ripristinarli
s=raw_input()
t=raw_input()
if hand_rank([x+'C' for x in s.split()])> \
	hand_rank([x+'C' for x in t.split()]): print s
else: print t
## decide se il grafo è connesso isconnected

def bfs(diz):
    root=diz.keys()[0];
    c={};q=[]
    for k in diz.keys(): c[k]=1
    c[root]=0; q.append(root)
    while q:
        di=q.pop();
        u=''.join(di)
        for e in diz[u]:
            if c[e]==1:
                c[e]=0;q.append(e)
    return c
                
N=input();M=input();d={}
for i in xrange(M):
    a,b=raw_input().split()
    try:d[a].append(b)
    except: d[a]=[b]
    try:d[b].append(a)
    except: d[b]=[a]
h=bfs(d).values()
if sum(h)==0 and len(h)==N: print 'true'
else: print 'false'
###maxsubarray
def maxSubArray(ls):
	if len(ls)==0:return 0
	runSum = maxSum = ls[0]
	i=0
	for j in range(1, len(ls)):
		if ls[j] > (runSum + ls[j]):runSum = ls[j];i = j
		else:runSum += ls[j]
		maxSum=max(runSum,maxSum)
	return maxSum

