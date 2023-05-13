def extractBestPos(L):
    def getBestScore(L,xo,depth):
        if depth == 0 or valueOf(L,'X') == -1:
            return (valueOf(L,'X'),(-1,-1))
        elif xo == 'X':
            bestScore = 2
            bestPos = (-1,-1)
            for i in range(3):
                for j in range(3):
                    if L[i][j] == '':
                        L[i][j] = 'O'
                        score = getBestScore(L,'O',depth-1)[0]
                        L[i][j] = ''
                        if score < bestScore:
                            bestScore = score
                            bestPos = (i,j)
            return (bestScore,bestPos)
        elif xo == 'O':
            bestScore = -2
            bestPos = (-1,-1)
            for i in range(3):
                for j in range(3):
                    if L[i][j] == '':
                        L[i][j] = 'X'
                        score = getBestScore(L,'X',depth-1)[0]
                        L[i][j] = ''
                        if score > bestScore:
                            bestScore = score
                            bestPos = (i,j)
            return (bestScore,bestPos)
        
    return getBestScore(L,'X',remaingPlaces(L))[1]

