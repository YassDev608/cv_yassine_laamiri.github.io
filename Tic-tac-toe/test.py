import math

def equals(a,b,c,x):
    if a == b and b == c and c == x and x!='':
        return True
    return False

def valueOf(L:list,xo:str):
        if equals(L[0][0],L[0][1],L[0][2],'O') or equals(L[1][0],L[1][1],L[1][2],'O') or equals(L[2][0],L[2][1],L[2][2],'O') or equals(L[0][0],L[1][0],L[2][0],'O') or equals(L[0][1],L[1][1],L[2][1],'O') or equals(L[0][2],L[1][2],L[2][2],'O') or equals(L[0][0],L[1][1],L[2][2],'O') or equals(L[0][2],L[1][1],L[2][0],'O'):
            return 1
        elif equals(L[0][0],L[0][1],L[0][2],'X') or equals(L[1][0],L[1][1],L[1][2],'X') or equals(L[2][0],L[2][1],L[2][2],'X') or equals(L[0][0],L[1][0],L[2][0],'X') or equals(L[0][1],L[1][1],L[2][1],'X') or equals(L[0][2],L[1][2],L[2][2],'X') or equals(L[0][0],L[1][1],L[2][2],'X') or equals(L[0][2],L[1][1],L[2][0],'X'):
            return -1
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
    

def bestPosition(L,player):
    if player == 'O':
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