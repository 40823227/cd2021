var tipuesearch = {"pages": [{'title': 'About', 'text': '我的倉儲： https://github.com/40823227/cd2021 \n 網站: https://40823227.github.io/cd2021 \n 兩人小組倉儲： https://github.com/40823227/stage1-bg25 \n 網站: https://40823227.github.io/stage1-bg25 \n 四人小組倉儲： https://github.com/40823227/stage2-bg5 \n 網站: https://40823227.github.io/stage2-bg5 \n 八人小組倉儲： https://github.com/40823227/stage3-bg7 \n 網站: https://40823227.github.io/stage3-bg7 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Works', 'text': '', 'tags': '', 'url': 'Works.html'}, {'title': 'W1', 'text': '進度: \n 1.建立倉儲、網頁 \n 2.Leo編輯 \n 3.建立ssh \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2-3', 'text': '兩人小組專題 \n 主題：圖案裁剪機 (肘節機構) \n 動機： 想要讓物品上增添更多色彩及個性 \n 分配工作： \n 40823227:建立、編輯小組倉儲、網站,模擬機構 \n 40823241:繪圖、製作簡報、影片 \n 參考影片: \n \n 成品圖: \n \n 影片: \n', 'tags': '', 'url': 'W2-3.html'}, {'title': 'W4', 'text': '模擬機構 \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '2b \n \n \n \n \n \n \n 組別 \n 片長 \n \n \n stage1-bg1 \n 7:14 \n \n \n stage1-bg2 \n 1:55 \n \n \n stage1-bg3 \n 1:59 \n \n \n stage1-bg4 \n 2:51 \n \n \n stage1-bg5 \n 3:00 \n \n \n stage1-bg6 \n 3:07 \n \n \n stage1-bg7 \n 2:47 \n \n \n stage1-bg8 \n 3:25 \n \n \n stage1-bg9 \n 2:43 \n \n \n stage1-bg10 \n 2:20 \n \n \n stage1-bg11 \n 1:38 \n \n \n stage1-bg12 \n 1:47 \n \n \n stage1-bg13 \n 2:09 \n \n \n stage1-bg14 \n 5:58 \n \n \n stage1-bg15 \n 3:24 \n \n \n stage1-bg16 \n 3:34 \n \n \n stage1-bg17 \n 4:33 \n \n \n stage1-bg18 \n 5:03 \n \n \n stage1-bg19 \n 3:12 \n \n \n stage1-bg20 \n 3:32 \n \n \n stage1-bg21 \n 5:02 \n \n \n stage1-bg22 \n 4:47 \n \n \n stage1-bg23 \n 2:56 \n \n \n stage1-bg24 \n 5:00 \n \n \n stage1-bg25 \n 4:54 \n \n \n stage1-bg26 \n \n \n \n stage1-bg27 \n 3:44 \n \n \n stage1-bg28 \n \n \n \n stage1-bg29 \n \n \n \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6-8', 'text': '\n', 'tags': '', 'url': 'W6-8.html'}, {'title': 'W9', 'text': '\n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '\n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11-12', 'text': '直播影片 \n \n', 'tags': '', 'url': 'W11-12.html'}, {'title': 'W13', 'text': '機械手臂程式 \n 參考組長影片: 模擬影片 \n from \xa0 robolink \xa0 import \xa0 * \n from \xa0 robodk \xa0 import \xa0 * \n \xa0 \n import \xa0 os \n \xa0 \n dir_path \xa0 = \xa0 os.path.dirname(os.path.realpath(__file__)) \n print (dir_path) \n # Calculate pyramid coordinate \n \xa0 \n # Setup global parameters \n BALL_DIAMETER \xa0 = \xa0 100 \xa0 # diameter of one ball \n APPROACH \xa0 = \xa0 100 \xa0 # approach distance to grab each part, in mm \n nTCPs \xa0 = \xa0 6 \xa0 # number of TCP\'s in the tool \n \xa0 \n def \xa0 pyramid_calc(BALLS_SIDE = 4 ): \n """Calculate a list of points (ball center) as if the balls were place in a pyramid""" \n #the number of balls can be calculated as: int(BALLS_SIDE*(BALLS_SIDE+1)*(2*BALLS_SIDE+1)/6) \n #BALL_DIAMETER = 100 \n xyz_list \xa0 = \xa0 [] \n sqrt2 \xa0 = \xa0 2 * * ( 0.5 ) \n for \xa0 h \xa0 in \xa0 range (BALLS_SIDE): \n for \xa0 i \xa0 in \xa0 range (BALLS_SIDE - h): \n for \xa0 j \xa0 in \xa0 range (BALLS_SIDE - h): \n height \xa0 = \xa0 h * BALL_DIAMETER / sqrt2 \xa0 + \xa0 BALL_DIAMETER / 2 \n xyz_list \xa0 = \xa0 xyz_list \xa0 + \xa0 [[i * BALL_DIAMETER \xa0 + \xa0 (h + 1 ) * BALL_DIAMETER * 0.5 , j * BALL_DIAMETER \xa0 + \xa0 (h + 1 ) * BALL_DIAMETER * 0.5 , height]] \n return \xa0 xyz_list \n \xa0 \n def \xa0 TCP_On(toolitem, tcp_id): \n """Attach the closest object to the toolitem Htool pose, \n furthermore, it will output appropriate function calls on the generated robot program (call to TCP_On)""" \n toolitem.AttachClosest() \n toolitem.RDK().RunMessage( \'Set air valve %i on\' \xa0 % \xa0 (tcp_id + 1 )) \n toolitem.RDK().RunProgram( \'TCP_On(%i)\' \xa0 % \xa0 (tcp_id + 1 )); \n \xa0 \n def \xa0 TCP_Off(toolitem, tcp_id, itemleave = 0 ): \n """Detaches the closest object attached to the toolitem Htool pose, \n furthermore, it will output appropriate function calls on the generated robot program (call to TCP_Off)""" \n toolitem.DetachAll(itemleave) \n toolitem.RDK().RunMessage( \'Set air valve %i off\' \xa0 % \xa0 (tcp_id + 1 )) \n toolitem.RDK().RunProgram( \'TCP_Off(%i)\' \xa0 % \xa0 (tcp_id + 1 )); \n \xa0 \n # Make a list of positions to place the objects \n balls_list \xa0 = \xa0 pyramid_calc( 4 ) \n \xa0 \n #print(len(frame1_list)) \n # 4*4 = 16 \n # 3*3 = 9 \n # 2*2 = 4 \n # 1+4+9+16 = 30 \n \xa0 \n # height 50*sqrt(2) \n \'\'\' \n [ \n \xa0 \n [50.0, 50.0, 50.0], [50.0, 150.0, 50.0], [50.0, 250.0, 50.0], [50.0, 350.0, 50.0], \n \xa0 \n [150.0, 50.0, 50.0], [150.0, 150.0, 50.0], [150.0, 250.0, 50.0], [150.0, 350.0, 50.0], \n \xa0 \n [250.0, 50.0, 50.0], [250.0, 150.0, 50.0], [250.0, 250.0, 50.0], [250.0, 350.0, 50.0], \n \xa0 \n [350.0, 50.0, 50.0], [350.0, 150.0, 50.0], [350.0, 250.0, 50.0], [350.0, 350.0, 50.0], \n \xa0 \n \xa0 \n [100.0, 100.0, 120.71067811865474], [100.0, 200.0, 120.71067811865474], [100.0, 300.0, 120.71067811865474], \n \xa0 \n [200.0, 100.0, 120.71067811865474], [200.0, 200.0, 120.71067811865474], [200.0, 300.0, 120.71067811865474], \n \xa0 \n [300.0, 100.0, 120.71067811865474], [300.0, 200.0, 120.71067811865474], [300.0, 300.0, 120.71067811865474], \n \xa0 \n \xa0 \n [150.0, 150.0, 191.42135623730948], [150.0, 250.0, 191.42135623730948], \n \xa0 \n [250.0, 150.0, 191.42135623730948], [250.0, 250.0, 191.42135623730948], \n \xa0 \n \xa0 \n [200.0, 200.0, 262.13203435596427] \n \xa0 \n ] \n \xa0 \n \'\'\' \n # https://github.com/RoboDK/RoboDK-API/blob/master/Python/robolink.py \n # robodk_path variable to specify location of RoboDK.exe \n # under Ubuntu can not use "-NEWINSTANCE" \n \'\'\' \n start_robodk.sh content \n LD_LIBRARY_PATH="/home/yen/RoboDK/bin/lib" \n export LD_LIBRARY_PATH \n /home/yen/RoboDK/bin/RoboDK \n \'\'\' \n RDK \xa0 = \xa0 Robolink(robodk_path = r "Y:\\robodk522_portable\\bin\\RoboDK.exe" ,args = [ "-SKIPINI" , \xa0 "-EXIT_LAST_COM" ]) \n # Add robot and the accompanied Base coordinate \n print (dir_path \xa0 + \xa0 \'/Fanuc-M-710iC-50.robot\' ) \n # relative directory or absolute directory will work for AddFile under Ubuntu \n #robot = RDK.AddFile(r"/home/yen/github/wcm2021/downloads/robodk/pick_and_place_kmol_mac/Fanuc-M-710iC-50.robot") \n robot \xa0 = \xa0 RDK.AddFile( \'Fanuc-M-710iC-50.robot\' ) \n # Get the default robot base frame \n robot_frame \xa0 = \xa0 RDK.Item( \'Fanuc M-710iC/50 Base\' ) \n # Move the base frame to the origin \n robot_frame.setPose(transl( 0 , 0 , 0 )) \n \xa0 \n # Add a tool to an existing robot: \n tool \xa0 = \xa0 RDK.AddFile(dir_path \xa0 + \xa0 \'/MainTool.tool\' , robot) \n \xa0 \n # Add table 1 \n table1_frame \xa0 = \xa0 RDK.AddFrame( \'Table 1\' ) \n table1_frame.setPose(transl( 807.766544 , - 963.699898 , 41.478944 )) \n table1_stl \xa0 = \xa0 RDK.AddFile(dir_path \xa0 + \xa0 \'/Table.stl\' , table1_frame) \n \xa0 \n # Add table 2 \n table2_frame \xa0 = \xa0 RDK.AddFrame( \'Table 2\' ) \n table2_frame.setPose(transl( 926.465508 , 337.151529 , 94.871928 )) \n table2_stl \xa0 = \xa0 RDK.AddFile(dir_path \xa0 + \xa0 \'/Table.stl\' , table2_frame) \n \xa0 \n # Calculate tool frames for the suction cup tool of 6 suction cups \n TCP_list \xa0 = \xa0 [] \n for \xa0 i \xa0 in \xa0 range (nTCPs): \n TCPi_pose \xa0 = \xa0 transl( 0 , 0 , 100 ) * rotz(( 360 / nTCPs) * i * pi / 180 ) * transl( 125 , 0 , 0 ) * roty(pi / 2 ) \n TCPi \xa0 = \xa0 robot.AddTool(TCPi_pose, \xa0 \'TCP %i\' \xa0 % \xa0 (i + 1 )) \n TCP_list.append(TCPi) \n \xa0 \n TCP_0 \xa0 = \xa0 TCP_list[ 0 ] \n \xa0 \n # Turn on automatic rendering \n RDK.Render( True ) \n \xa0 \n # Add balls \n # create a list with 30 elements \n balls \xa0 = \xa0 [ None \xa0 for \xa0 _ \xa0 in \xa0 range ( 30 )] \n layer \xa0 = \xa0 [ 16 , \xa0 9 , \xa0 4 , \xa0 1 ] \n count \xa0 = \xa0 0 \n for \xa0 i \xa0 in \xa0 range ( len (balls_list)): \n # transl(balls_list) \n balls[i] \xa0 = \xa0 RDK.AddFile( \'./ball.stl\' , table1_frame) \n balls[i].setPose(transl(balls_list[i])) \n count \xa0 = \xa0 count \xa0 + \xa0 1 \n if \xa0 count < = \xa0 16 : \n balls[i].setColor([ 1 , \xa0 0 , \xa0 0 ]) \n elif \xa0 count > \xa0 16 \xa0 and \xa0 count < = \xa0 25 : \n balls[i].setColor([ 0 , \xa0 1 , \xa0 0 ]) \n elif \xa0 count > \xa0 25 \xa0 and \xa0 count < = 29 : \n balls[i].setColor([ 1 , \xa0 1 , \xa0 0 ]) \n else : \n balls[i].setColor([ 0 , \xa0 0 , \xa0 1 ]) \n \xa0 \n # Make a list of positions to place the objects \n # ball_list is the same as frame1_list \n frame1_list \xa0 = \xa0 pyramid_calc( 4 ) \n frame2_list \xa0 = \xa0 pyramid_calc( 4 ) \n \xa0 \n # Move balls \n robot.setPoseTool(TCP_list[ 0 ]) \n nballs_frame1 \xa0 = \xa0 len (frame1_list) \n nballs_frame2 \xa0 = \xa0 len (frame2_list) \n idTake \xa0 = \xa0 nballs_frame1 \xa0 - \xa0 1 \n idLeave \xa0 = \xa0 0 \n idTCP \xa0 = \xa0 0 \n \xa0 \n target_app_frame \xa0 = \xa0 transl( 2 * BALL_DIAMETER, \xa0 2 * BALL_DIAMETER, \xa0 4 * BALL_DIAMETER) * roty(pi) * transl( 0 , 0 , - APPROACH) \n \xa0 \n # frame1 is the same as table1_frame \n frame1 \xa0 = \xa0 RDK.Item( \'Table 1\' ) \n frame2 \xa0 = \xa0 RDK.Item( \'Table 2\' ) \n \xa0 \n while \xa0 idTake > = \xa0 0 : \n # ------------------------------------------------------------------ \n # first priority: grab as many balls as possible \n # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs) \n ntake \xa0 = \xa0 min (nTCPs, idTake \xa0 + \xa0 1 ) \n \xa0 \n # approach to frame 1 \n robot.setPoseFrame(frame1) \n robot.setPoseTool(TCP_0) \n robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n robot.MoveJ(target_app_frame) \n \xa0 \n # grab ntake balls from frame1 \n for \xa0 i \xa0 in \xa0 range (ntake): \n TCPi \xa0 = \xa0 TCP_list[i] \n robot.setPoseTool(TCPi) \n # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted \n target \xa0 = \xa0 transl(frame1_list[idTake]) * roty(pi) * rotx( 30 * pi / 180 ) \n target_app \xa0 = \xa0 target * transl( 0 , 0 , - APPROACH) \n idTake \xa0 = \xa0 idTake \xa0 - \xa0 1 \n robot.MoveL(target_app) \n robot.MoveL(target) \n TCP_On(TCPi, i) \n robot.MoveL(target_app) \n \xa0 \n # ------------------------------------------------------------------ \n # second priority: unload the tool \n # approach to frame2 and place the tool balls into table2 \n robot.setPoseTool(TCP_0) \n robot.MoveJ(target_app_frame) \n robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n robot.setPoseFrame(frame2) \n robot.MoveJ(target_app_frame) \n for \xa0 i \xa0 in \xa0 range (ntake): \n TCPi \xa0 = \xa0 TCP_list[i] \n robot.setPoseTool(TCPi) \n if \xa0 idLeave > nballs_frame2 - 1 : \n raise \xa0 Exception( "No room left to place objects in Table 2" ) \n \xa0 \n # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted \n target \xa0 = \xa0 transl(frame2_list[idLeave]) * roty(pi) * rotx( 30 * pi / 180 ) \n target_app \xa0 = \xa0 target * transl( 0 , 0 , - APPROACH) \n idLeave \xa0 = \xa0 idLeave \xa0 + \xa0 1 \n robot.MoveL(target_app) \n robot.MoveL(target) \n TCP_Off(TCPi, i, frame2) \n robot.MoveL(target_app) \n \xa0 \n robot.MoveJ(target_app_frame) \n \xa0 \n # Move home when the robot finishes \n robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '取分項目1，參考 \n Week14 \n def stu2b(account): \xa0return account teamb = [] \xa0\xa0\xa0 with open("stage3_2b.txt") as fh:\xa0\xa0\xa0\xa0 #讀取stage3_2b的檔案 \xa0\xa0\xa0\xa0data = fh.readlines() \xa0\xa0\xa0\xa0data = [a.replace(\'40823231\',\'40823231-2\') for a in data]\xa0\xa0\xa0\xa0\xa0 #將40823231換成40823231-2 \xa0\xa0\xa0\xa0data = [a.replace(\'407\',\'s407\') for a in data]\xa0\xa0\xa0\xa0 #將有407的學號換成s407 \xa0\xa0 for i in range(len(data)):\xa0\xa0\xa0\xa0 #數據中會有\\n跟\\t，將\\n跟\\t去除 \xa0\xa0\xa0\xa0group = data[i].rstrip("\\n").split("\\t") \xa0\xa0\xa0\xa0teamb.append(group) \xa0\xa0\xa0\xa0\xa0\xa0\xa0 output = ""\xa0\xa0\xa0 seperator = "-"*10 + "</br>"\xa0\xa0\xa0\xa0 #分隔號製作 \xa0\xa0\xa0 for i in teamb[0:]:\xa0\xa0\xa0 #小組 組長 其他六個組員 \xa0\xa0\xa0\xa0team = i[0] \xa0\xa0\xa0\xa0leader = stu2b(i[1]) \xa0\xa0\xa0\xa0m1 = stu2b(i[3]) \xa0\xa0\xa0\xa0m2 = stu2b(i[5]) \xa0\xa0\xa0\xa0m3 = stu2b(i[7]) \xa0\xa0\xa0\xa0m4 = stu2b(i[9]) \xa0\xa0\xa0\xa0m5 = stu2b(i[11]) \xa0\xa0\xa0\xa0m6 = stu2b(i[13]) \xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0leaderrepo = "<a href=\'http://github.com/" + leader + "/cd2021\'>" + leader + " repo</a>"\xa0\xa0\xa0 #組長以及組員的倉儲和網站 \xa0\xa0\xa0\xa0leadersite = "<a href=\'http://" + leader + ".github.io/cd2021\'>" + leader +\xa0 " site</a>" \xa0\xa0\xa0\xa0m1repo = "<a href=\'http://github.com/" + m1 + "/cd2021\'>" + m1 + " repo</a>" \xa0\xa0\xa0\xa0m1site = "<a href=\'http://" + m1 + ".github.io/cd2021\'>" + m1 +\xa0 " site</a>" \xa0\xa0\xa0\xa0m2repo = "<a href=\'http://github.com/" + m2 + "/cd2021\'>" + m2 + " repo</a>" \xa0\xa0\xa0\xa0m2site = "<a href=\'http://" + m2 + ".github.io/cd2021\'>" + m2 +\xa0 " site</a>" \xa0\xa0\xa0\xa0m3repo = "<a href=\'http://github.com/" + m3 + "/cd2021\'>" + m3 + " repo</a>" \xa0\xa0\xa0\xa0m3site = "<a href=\'http://" + m3 + ".github.io/cd2021\'>" + m3 +\xa0 " site</a>" \xa0\xa0\xa0\xa0m4repo = "<a href=\'http://github.com/" + m4 + "/cd2021\'>" + m4 + " repo</a>" \xa0\xa0\xa0\xa0m4site = "<a href=\'http://" + m4 + ".github.io/cd2021\'>" + m4 +\xa0 " site</a>" \xa0\xa0\xa0\xa0m5repo = "<a href=\'http://github.com/" + m5 + "/cd2021\'>" + m5 + " repo</a>" \xa0\xa0\xa0\xa0m5site = "<a href=\'http://" + m5 + ".github.io/cd2021\'>" + m5 +\xa0 " site</a>" \xa0\xa0\xa0\xa0m6repo = "<a href=\'http://github.com/" + m6 + "/cd2021\'>" + m6 + " repo</a>" \xa0\xa0\xa0\xa0m6site = "<a href=\'http://" + m6 + ".github.io/cd2021\'>" + m6 +\xa0 " site</a>" \xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0\xa0teamrepo = "<a href=\'http://github.com/" + leader + "/" + team + "\'>" + team + " repo</a>"\xa0\xa0\xa0\xa0 #小組的倉儲含網站 \xa0\xa0\xa0\xa0teamsite =\xa0 "<a href=\'http://" + m1 + ".github.io/" + team + "\'>" + team +\xa0 " site</a>" \xa0\xa0\xa0 \xa0\xa0\xa0\xa0output += teamrepo + " | " + teamsite + " | " +leaderrepo + " | " + leadersite + " | " +m1repo + " | " + m1site + " | " +m2repo + " | " + m2site + " | " +m3repo + " | " + m3site + " | " +m4repo + " | " + m4site + " | " +m5repo + " | " + m5site + " | " +m6repo + " | " + m6site \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0try: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0m7 = stu2b(i[15])\xa0\xa0\xa0\xa0 #第七個組員 \xa0\xa0\xa0\xa0except: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0m7 = "" \xa0\xa0\xa0\xa0try: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0m8 = stu2b(i[17])\xa0\xa0\xa0\xa0 #第八個組員 \xa0\xa0\xa0\xa0except: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0m8 = "" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0if m7 != "": \xa0\xa0\xa0\xa0\xa0\xa0\xa0m7repo = "<a href=\'http://github.com/" + m7 + "/cd2021\'>" + m7 + " repo</a>"\xa0\xa0\xa0\xa0 #如果有第七個組員會再加倉儲和網站沒有的話就空白 \xa0\xa0\xa0\xa0\xa0\xa0\xa0m7site = "<a href=\'http://" + m7 + ".github.io/cd2021\'>" + m7 +\xa0 " site</a>"\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0output += " |\xa0 " + m7repo + "| " + m7site \xa0\xa0\xa0\xa0else: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0output += "" \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0if m8 != "": \xa0\xa0\xa0\xa0\xa0\xa0\xa0m8repo = "<a href=\'http://github.com/" + m8 + "/cd2021\'>" + m8 + " repo</a>"\xa0\xa0\xa0\xa0 #如果有第八個組員會再加倉儲和網站最後再加分隔線 \xa0\xa0\xa0\xa0\xa0\xa0\xa0m8site = "<a href=\'http://" + m8 + ".github.io/cd2021\'>" + m8 +\xa0 " site</a>"\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0output += " |\xa0 " + m8repo + "| " + m8site + "<br />" + seperator \xa0\xa0\xa0\xa0else: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0output += "<br />" + seperator \xa0\xa0\xa0 \xa0\xa0\xa0 print(output)\xa0\xa0\xa0\xa0 #輸出 \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '\n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '本週取分項目 \n MTB_robot 的取放方塊流程規劃 (Process Planning): \n 1. Onshape 零組件繪製 \n https://cad.onshape.com/documents/072b8905be8ab5f061e84e74/w/b19e99a34d1f7da94e12c5e2/e/0182e53e23d88597516646fa \n 2. 建立 CoppeliaSim 4.1.0 MTB robot 場景 (20%) \n 場景: https://drive.google.com/file/d/1CoTzDVy9WUPflJh1fIZGiOj0vnVMEVnL/view?usp=sharing \n 3. 手臂末端加入 components-gripper-suction pad 吸盤 (20%) \n 請接續上述 MTB robot, 在其末端接上 force sensor 後接上標準 suction pad 後, 分別導入 W15 週線上課程之鍵盤控制程式後, 拍攝影片示範 W15 線上課程中之操作與示範過程. \n 4. 逆向運動學函式 (20%) \n \n 5. Python remote API 逆向運動學函式 (20%) \n 請利用 Python remote API 程式重現以迴圈方式執行 W15 兩個指定位置之方塊取放. \n', 'tags': '', 'url': 'W16.html'}, {'title': 'W17', 'text': '\n', 'tags': '', 'url': 'W17.html'}, {'title': 'W18', 'text': '\n', 'tags': '', 'url': 'W18.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': 'Task1', 'text': '\n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n \n \n \n def   stu2b(account): \n \xa0 return   account \n teamb  =   [] \n \xa0\xa0\xa0 \xa0 \n with  open ( "stage3_2b.txt" ) as fh:\xa0\xa0\xa0\xa0  #讀取stage3_2b的檔案 \n \xa0\xa0\xa0\xa0 data  =   fh.readlines() \n \xa0\xa0\xa0\xa0 data  =   [a.replace( \'40823231\' , \'40823231-2\' )  for   a  in   data]\xa0\xa0\xa0\xa0\xa0  #將40823231換成40823231-2 \n \xa0\xa0\xa0\xa0 data  =   [a.replace( \'407\' , \'s407\' )  for   a  in   data]\xa0\xa0\xa0\xa0  #將有407的學號換成s407 \n \xa0\xa0 \xa0 \n for   i  in   range ( len (data)):\xa0\xa0\xa0\xa0  #數據中會有\\n跟\\t，將\\n跟\\t去除 \n \xa0\xa0\xa0\xa0 group  =   data[i].rstrip( "\\n" ).split( "\\t" ) \n \xa0\xa0\xa0\xa0 teamb.append(group) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n output  =   ""\xa0\xa0\xa0  \n seperator  =   "-" * 10   +   "</br>" \xa0\xa0\xa0\xa0  #分隔號製作 \n \xa0\xa0\xa0 \xa0 \n for   i  in   teamb[ 0 :]:\xa0\xa0\xa0  #小組 組長 其他六個組員 \n \xa0\xa0\xa0\xa0 team  =   i[ 0 ] \n \xa0\xa0\xa0\xa0 leader  =   stu2b(i[ 1 ]) \n \xa0\xa0\xa0\xa0 m1  =   stu2b(i[ 3 ]) \n \xa0\xa0\xa0\xa0 m2  =   stu2b(i[ 5 ]) \n \xa0\xa0\xa0\xa0 m3  =   stu2b(i[ 7 ]) \n \xa0\xa0\xa0\xa0 m4  =   stu2b(i[ 9 ]) \n \xa0\xa0\xa0\xa0 m5  =   stu2b(i[ 11 ]) \n \xa0\xa0\xa0\xa0 m6  =   stu2b(i[ 13 ]) \n \xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 leaderrepo  =   "<a href=\'http://github.com/"   +   leader  +   "/cd2021\'>"   +   leader  +   " repo</a>" \xa0\xa0\xa0  #組長以及組員的倉儲和網站 \n \xa0\xa0\xa0\xa0 leadersite  =   "<a href=\'http://"   +   leader  +   ".github.io/cd2021\'>"   +   leader  + \xa0  " site</a>" \n \xa0\xa0\xa0\xa0 m1repo  =   "<a href=\'http://github.com/"   +   m1  +   "/cd2021\'>"   +   m1  +   " repo</a>" \n \xa0\xa0\xa0\xa0 m1site  =   "<a href=\'http://"   +   m1  +   ".github.io/cd2021\'>"   +   m1  + \xa0  " site</a>" \n \xa0\xa0\xa0\xa0 m2repo  =   "<a href=\'http://github.com/"   +   m2  +   "/cd2021\'>"   +   m2  +   " repo</a>" \n \xa0\xa0\xa0\xa0 m2site  =   "<a href=\'http://"   +   m2  +   ".github.io/cd2021\'>"   +   m2  + \xa0  " site</a>" \n \xa0\xa0\xa0\xa0 m3repo  =   "<a href=\'http://github.com/"   +   m3  +   "/cd2021\'>"   +   m3  +   " repo</a>" \n \xa0\xa0\xa0\xa0 m3site  =   "<a href=\'http://"   +   m3  +   ".github.io/cd2021\'>"   +   m3  + \xa0  " site</a>" \n \xa0\xa0\xa0\xa0 m4repo  =   "<a href=\'http://github.com/"   +   m4  +   "/cd2021\'>"   +   m4  +   " repo</a>" \n \xa0\xa0\xa0\xa0 m4site  =   "<a href=\'http://"   +   m4  +   ".github.io/cd2021\'>"   +   m4  + \xa0  " site</a>" \n \xa0\xa0\xa0\xa0 m5repo  =   "<a href=\'http://github.com/"   +   m5  +   "/cd2021\'>"   +   m5  +   " repo</a>" \n \xa0\xa0\xa0\xa0 m5site  =   "<a href=\'http://"   +   m5  +   ".github.io/cd2021\'>"   +   m5  + \xa0  " site</a>" \n \xa0\xa0\xa0\xa0 m6repo  =   "<a href=\'http://github.com/"   +   m6  +   "/cd2021\'>"   +   m6  +   " repo</a>" \n \xa0\xa0\xa0\xa0 m6site  =   "<a href=\'http://"   +   m6  +   ".github.io/cd2021\'>"   +   m6  + \xa0  " site</a>" \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 teamrepo  =   "<a href=\'http://github.com/"   +   leader  +   "/"   +   team  +   "\'>"   +   team  +   " repo</a>" \xa0\xa0\xa0\xa0  #小組的倉儲含網站 \n \xa0\xa0\xa0\xa0 teamsite  = \xa0  "<a href=\'http://"   +   m1  +   ".github.io/"   +   team  +   "\'>"   +   team  + \xa0  " site</a>" \n \xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 output  + =   teamrepo  +   " | "   +   teamsite  +   " | "   + leaderrepo  +   " | "   +   leadersite  +   " | "   + m1repo  +   " | "   +   m1site  +   " | "   + m2repo  +   " | "   +   m2site  +   " | "   + m3repo  +   " | "   +   m3site  +   " | "   + m4repo  +   " | "   +   m4site  +   " | "   + m5repo  +   " | "   +   m5site  +   " | "   + m6repo  +   " | "   +   m6site  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 try : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 m7  =   stu2b(i[ 15 ])\xa0\xa0\xa0\xa0  #第七個組員 \n \xa0\xa0\xa0\xa0 except : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 m7  =   "" \n \xa0\xa0\xa0\xa0 try : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 m8  =   stu2b(i[ 17 ])\xa0\xa0\xa0\xa0  #第八個組員 \n \xa0\xa0\xa0\xa0 except : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 m8  =   "" \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 if   m7 ! =   "": \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 m7repo  =   "<a href=\'http://github.com/"   +   m7  +   "/cd2021\'>"   +   m7  +   " repo</a>" \xa0\xa0\xa0\xa0  #如果有第七個組員會再加倉儲和網站沒有的話就空白 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 m7site  =   "<a href=\'http://"   +   m7  +   ".github.io/cd2021\'>"   +   m7  + \xa0  " site</a>" \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 output  + =   " |\xa0 "   +   m7repo  +   "| "   +   m7site \n \xa0\xa0\xa0\xa0 else : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 output  + =   ""  \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 if   m8 ! =   "": \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 m8repo  =   "<a href=\'http://github.com/"   +   m8  +   "/cd2021\'>"   +   m8  +   " repo</a>" \xa0\xa0\xa0\xa0  #如果有第八個組員會再加倉儲和網站最後再加分隔線 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 m8site  =   "<a href=\'http://"   +   m8  +   ".github.io/cd2021\'>"   +   m8  + \xa0  " site</a>" \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0 output  + =   " |\xa0 "   +   m8repo  +   "| "   +   m8site  +   "<br />"   +   seperator \n \xa0\xa0\xa0\xa0 else : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 output  + =   "<br />"   +   seperator \n \xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0 \xa0 \n print (output)\xa0\xa0\xa0\xa0  #輸出 \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Task1.html'}, {'title': 'Task2', 'text': '下載\xa0 CoppeliaSim 4.2.0 載點 \n 下載控制程式碼 remote API 來控制場景 \n \xa0 http://mde.tw/cad2020/downloads/coppeliasim/vrep_remoteapi_ex.7z \n 把程式碼放進SciTE之後按GO \n', 'tags': '', 'url': 'Task2.html'}, {'title': 'Task3', 'text': '\n', 'tags': '', 'url': 'Task3.html'}, {'title': '筆記', 'text': '', 'tags': '', 'url': '筆記.html'}, {'title': '建立網頁', 'text': '載點 \n 打開start_ipv4.bat \n 確認版本 \n \n \n \n tmp新增git_ref資料夾並在裡面新增git_config.txt git_config.txt內容為git config --global http.proxy http://[2001:288:6004:17::69]:3128 在home_ipv4新增.gitconfig .gitconfig內容為 [http] #proxy = http://[2001:288:6004:17::69]:3128 \n [http] #proxy = http://[2001:288:6004:17::53]:3128 登入github帳號 新增cd2021 \n \n \n 輸入指令(創資料夾) \n \n 進到cd2021，輸入指令 \n \n 進到cmsimde→up_dir，複製全部(ctrl+A→ctrl+C) \n \n 貼到cd2021，會有重複的檔案 選擇 第3個 \n \n \n 進到cmsimde \n \n 分別輸入pip install flask、pip install flask_cors、pip install lxml、pip install bs4、pip install markdown、pip install pelican、pip install leo指令 載完後輸入python wsgi.py 打開9443，登入(login)輸入密碼(admin) 點config更改title(40823227 cd2021) 自己的學號 做編輯，然後save→generate_pages 進到cd2021 \n (舊版) git add . git config user.name "40823227" 自己的學號 git config user.email "40823227@gm.nfu.edu.tw" 自己的信箱 git commit -m "變更所做的標題" git push(學號和密碼) 到倉儲，點setting \n \n 往下到github pages，更改成main→save \n \n 回到倉儲看是否有出現黃球和綠勾 \n', 'tags': '', 'url': '建立網頁.html'}, {'title': '數學符號與方程式', 'text': 'Inline math equations go in like so: \xa0 ω = d ϕ / d t ω = d ϕ / d t . Display math should get its own line and be put in in double-dollarsigns: \n I = ∫ ρ R 2 d V \n \n 於cad2020課程中所學到的軟體，程式: \n \n \n 1.錄影,截圖,筆記:ShaerX,zoomit. \n 2.繪圖軟體: NX, Solidworks, Inventor, Onshape, Solvespace \n 3.github程式組成: \n \n 2020cad:學習如何使用程式對各繪圖軟體繪出的圖進行大量複製並小幅度修改 \n 利用MARKDOWN 寫投影片 \n 以下利用 Markdown 格式展示 Python 程式碼: \n # use threading  and  subprocess to threading the make process\n import  os\n import  subprocess\n import  threading\n\ndef domake():\n\n     path  =  "../exposed/api/exposed" \n    ubuntu =  "../Ubuntu" \n\n    # create obj  path \n\n     if   not  os. path .exists( path + "/../obj" ):\n        os.makedirs( path + "/../obj" )\n\n    subprocess.call([ "make" ,  "clean" ], cwd= path )\n    subprocess.call( "make" , cwd= path )\n    subprocess.call([ "cp" ,  "{libslvs.so, _slvs.so, slvs.py}" , ubuntu], cwd= path )\n    subprocess.call([ "python3" ,  "circle_ex.py" ], cwd= path + "/" +ubuntu)\n\nmake = threading.Thread(target=domake)\nmake.start() \n', 'tags': '', 'url': '數學符號與方程式.html'}, {'title': '使用cms和acp指令', 'text': '\n', 'tags': '', 'url': '使用cms和acp指令.html'}, {'title': '合併組員倉儲', 'text': '\n', 'tags': '', 'url': '合併組員倉儲.html'}, {'title': 'ssh', 'text': 'ssh教學影片 \n \n', 'tags': '', 'url': 'ssh.html'}, {'title': '使用iframe導入影片', 'text': '\n \n 導入影片 template 導入結果如下 \n \n \n This is \xa0 https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併 \n 使用 csave 按鈕存檔無法刪除頁面資料 \n 使用 Edit All 模式, 無法使用csave按鈕(尚未測試) \n', 'tags': '', 'url': '使用iframe導入影片.html'}, {'title': '人形 Robot 模擬套件比較', 'text': 'A Comparison of Humanoid Robot Simulators A Quantitative Approach.pdf \n For robotic systems to be implemented in real-world scenarios, in several situations, it is preferred to develop and test them under controlled environments in order to reduce the risk of errors and unexpected behavior. \xa0In this regard, a more accessible and efficient alternative is to implement\xa0 the environment using robotic simulation tools. \n In general terms, our results show that Webots is the simulator with the lowest use ofresources, followed by V-REP, which has advantages over Gazebo, mainly because of the CPU use. \n Robot simulators allow evaluating the feasibility and efficiency of algorithms varying in type and complexity, in a more controlled environment with no disturbances avoiding the occurrence of accidents. \n', 'tags': '', 'url': '人形 Robot 模擬套件比較.html'}, {'title': '心得', 'text': '', 'tags': '', 'url': '心得.html'}, {'title': 'stage1', 'text': '剛開始想到做這個主題時，不知道以我們的專業知識能做出什麼花樣，在畫圖、改圖時遇到一點困難的地方，在畫零件時都有一點卡關，到使用coppeliasim時就遇到難以解決的狀況，這個軟體全都是用英文寫的.在閱讀上就有很大的難度，再加上要建立關係讓它動起來這簡直就是天方夜譚，雖然上了好多節程式有關的課，但還是寫不出什麼派上用場的程式。 \n', 'tags': '', 'url': 'stage1.html'}, {'title': 'stage2', 'text': '從二人轉換到四人協同的過程，雖然是多了兩個人，但意見也就多了多，每個人的想法都不一樣，怎麼去結合成一項產品，溝通尤為重要。我們也去利用了GITTER去達成不在同一空間的問題，去討論出我們這次的主題[窗簾伸縮機構]。之後希望在八人合作時，能克服每個人不同的意見，然後統整在一起，能做出更不一樣的東西。 \n', 'tags': '', 'url': 'stage2.html'}, {'title': 'stage3', 'text': '', 'tags': '', 'url': 'stage3.html'}]};