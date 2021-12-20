public class Battleship {
    public static double getHitProbability(int R, int C, int[][] G) {

        final boolean b = G.length == R;
        final boolean c = G[0].length == C;
        int count = 0;

        for (int i = 0; i < G.length; i++) {
            for (int j = 0; j < G[0].length; j++) {
                if (G[i][j] == 1) {
                    count++;
                } 
            }
        }

        System.out.println(count);
        return 0.0;
    }

    public static void main(String[] args) {
//        getHitProbability(2, 3, [[0, 0, 1], [1, 0, 1]])
    }
}
