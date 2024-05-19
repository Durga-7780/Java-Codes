package servletprograms;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/Savefile")
public class Savefile extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException {
		doPost(request,response);
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase","root","123456");
			Statement st=con.createStatement();
			String username,pass;
			username=request.getParameter("uname");
			pass=request.getParameter("passw");
			ResultSet rs=st.executeQuery("select * from instasignup");
			
			int c=0;
			while(rs.next())
			{
				String user=rs.getString(3);
				String pas=rs.getString(4);
				if(username.equals(user))
				{
					if(pass.equals(pas))
					{
						RequestDispatcher rd=request.getRequestDispatcher("instahome.jsp");
						rd.forward(request, response);
					}   
					    c=1;
						break;
				}
			}
				if(!rs.next() && c==0) {
					RequestDispatcher rd=request.getRequestDispatcher("signup.jsp");
					rd.forward(request,response);
				}
			
			
			
		}
		catch(Exception e) {}
	}
}
