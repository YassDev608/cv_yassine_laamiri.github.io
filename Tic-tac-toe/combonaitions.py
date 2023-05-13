import sys

import math


def generate():
    M = []
    def dfs(L:list,n:int,xo:str):
        if fullList(L) and L not in M:
            M.append(L)
            return
        for i in range(n):
            for j in range(n):
                H = [[L[i][j] for j in range(n)] for i in range(n)]
                if H[i][j] == '':
                    H[i][j] = xo
                    if xo == 'O':
                        dfs(H,n,'X')
                    if xo == 'X':
                        dfs(H,n,'O')
        
    
    L = [['','',''],['','',''],['','','']]
    dfs(L,3,'X')  
    return M

def fullList(L:list)->bool:
    n = len(L)
    for i in range(n):
        for j in range(n):
            if L[i][j] == '':
                return False
    return True

def equals(a,b,c,x):
    if a == b and b == c and c == x and x!='':
        return True
    return False

def valueOf(L:list,xo:str):
    if xo == 'X':
        if equals(L[0][0],L[0][1],L[0][2],'X') or equals(L[1][0],L[1][1],L[1][2],'X') or equals(L[2][0],L[2][1],L[2][2],'X') or equals(L[0][0],L[1][0],L[2][0],'X') or equals(L[0][1],L[1][1],L[2][1],'X') or equals(L[0][2],L[1][2],L[2][2],'X') or equals(L[0][0],L[1][1],L[2][2],'X') or equals(L[0][2],L[1][1],L[2][0],'X'):
            return 1
        elif equals(L[0][0],L[0][1],L[0][2],'O') or equals(L[1][0],L[1][1],L[1][2],'O') or equals(L[2][0],L[2][1],L[2][2],'O') or equals(L[0][0],L[1][0],L[2][0],'O') or equals(L[0][1],L[1][1],L[2][1],'O') or equals(L[0][2],L[1][2],L[2][2],'O') or equals(L[0][0],L[1][1],L[2][2],'O') or equals(L[0][2],L[1][1],L[2][0],'O'):
            return -1
        else:
            return 0
    elif xo == 'O':
        if equals(L[0][0],L[0][1],L[0][2],'X') or equals(L[1][0],L[1][1],L[1][2],'X') or equals(L[2][0],L[2][1],L[2][2],'X') or equals(L[0][0],L[1][0],L[2][0],'X') or equals(L[0][1],L[1][1],L[2][1],'X') or equals(L[0][2],L[1][2],L[2][2],'X') or equals(L[0][0],L[1][1],L[2][2],'X') or equals(L[0][2],L[1][1],L[2][0],'X'):
            return -1
        elif equals(L[0][0],L[0][1],L[0][2],'O') or equals(L[1][0],L[1][1],L[1][2],'O') or equals(L[2][0],L[2][1],L[2][2],'O') or equals(L[0][0],L[1][0],L[2][0],'O') or equals(L[0][1],L[1][1],L[2][1],'O') or equals(L[0][2],L[1][2],L[2][2],'O') or equals(L[0][0],L[1][1],L[2][2],'O') or equals(L[0][2],L[1][1],L[2][0],'O'):
            return 1
        else:
            return 0
        

    

def remaingPlaces(L:list):
    emptyPlaces = 0
    n = len(L)
    for i in range(n):
        for j in range(n):
            if L[i][j] == '':
                emptyPlaces += 1
    return emptyPlaces

def extractPos(oldList:list,newList:list):
    for i in range(3):
        for j in range(3):
            if oldList[i][j] == '' and newList[i][j] != '':
                return (i,j)
            
def Min(x,y):
    if x<y:
        return x
    else:
        return y
    
def Max(x,y):
    if x>y:
        return x
    else:
        return y

"""      
def extractBestPos(L):
    def getBestScore(L,xo,depth):
        if depth == 0 or valueOf(L,'X') == -1:
            return (valueOf(L,'X'),(-1,-1))
        elif xo == 'X':
            bestScore = -2
            bestPos = (-1,-1)
            for i in range(3):
                for j in range(3):
                    if L[i][j] == '':
                        L[i][j] = 'O'
                        score = getBestScore(L,'O',depth-1)[0]
                        L[i][j] = ''
                        if score > bestScore:
                            bestScore = score
                            bestPos = (i,j)
            return (bestScore,bestPos)
        elif xo == 'O':
            bestScore = 2
            bestPos = (-1,-1)
            for i in range(3):
                for j in range(3):
                    if L[i][j] == '':
                        L[i][j] = 'X'
                        score = getBestScore(L,'X',depth-1)[0]
                        L[i][j] = ''
                        if score < bestScore:
                            bestScore = score
                            bestPos = (i,j)
            return (bestScore,bestPos)
        
    return getBestScore(L,'X',remaingPlaces(L))[1]


"""
def Min(x,y):
    if x<y:
        return x
    else:
        return y
    
def Max(x,y):
    if x>y:
        return x
    else:
        return y

def minimax(L, player, depth):
    if depth == 0 or valueOf(L,'O') == -1:
        return valueOf(L,'O')
    if player == 'O':
        max_score = -math.inf
        for i in range(3):
            for j in range(3):
                if L[i][j] == '':
                    L[i][j] = player
                    score = minimax(L, 'X', depth-1)
                    L[i][j] = ''
                    max_score = Max(max_score, score)
        return max_score
    elif player == 'X':
        min_score = math.inf
        for i in range(3):
            for j in range(3):
                if L[i][j] == '':
                    L[i][j] = player
                    score = minimax(L, 'O', depth-1)
                    L[i][j] = ''
                    min_score = Min(min_score, score)
        return min_score

def minimaxX(L,player,depth):
    if depth == 0 or valueOf(L,'X') == -1:
        return valueOf(L,'X')
    if player == 'X':
        max = -math.inf
        for i in range(3):
            for j in range(3):
                if L[i][j] == '':
                    L[i][j] = player
                    score = minimaxX(L,'O',depth-1)
                    L[i][j] = ''
                    max = Max(max,score)
        return max
    elif player == 'O':
        min = math.inf
        for i in range(3):
            for j in range(3):
                if L[i][j] == '':
                    L[i][j] = player
                    score = minimaxX(L,'X',depth-1)
                    L[i][j] = ''
                    min = Min(min,score)
        return min
    


    


def bestPosition(L,player):
    if player == 'X':
        bestPosition = (-1,-1)
        bestScore = -math.inf
        for i in range(3):
            for j in range(3):
                if L[i][j] == '':
                    L[i][j] = player
                    score =  minimaxX(L,'O',remaingPlaces(L))
                    if score>bestScore:
                        bestScore = score
                        bestPosition = (i,j)
                    L[i][j] = ''
        return bestPosition
    elif player == 'O':
        bestPosition = (-1,-1)
        bestScore = -math.inf
        for i in range(3):
            for j in range(3):
                if L[i][j] == '':
                    L[i][j] = player
                    score =  minimax(L,'X',remaingPlaces(L))
                    if score>bestScore:
                        bestScore = score
                        bestPosition = (i,j)
                    L[i][j] = ''
        return bestPosition




                


print(bestPosition([['X','',''],['','',''],['','','']],'O'))
