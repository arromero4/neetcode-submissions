class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() == t.length()){
            return false;
        }

        HashSet<Integer> countS = new HashSet<Integer>();
        HashSet<Integer> countT = new HashSet<Integer>();

        for(int i=0; i < s.length;i++){
            countS[s[i]] = countS.getOrDefault(countS[s[i]] + 1, 0);
            countS[t[i]] = countT.getOrDefault(countT[s[i]] + 1, 0);
        }

        for(int c : countS){
            if(countS[c] != countT.getOrDefault(c, 0)){
                return false;
            }
        }
        return true;
    }
}
